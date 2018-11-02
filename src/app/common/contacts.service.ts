import { Injectable } from '@angular/core';
import { CommunicationService } from './http.service';
import { LoaderService } from '../common/loader/loader.service';
import { ReplaySubject } from 'rxjs';

import { API } from './API.consts';

@Injectable()
export class ContactsService {
  private contactsObserv;
  constructor(
    private communicationService: CommunicationService,
    private loaderService: LoaderService
  ) {
  }
  public getContactsObserv() {
    return this.contactsObserv = this.contactsObserv || this.createContactsObserv();
  }
  private createContactsObserv() {
    const observ = new ReplaySubject(1);
    this.getContactsFromServer(observ);
    return observ;
  }
  private getContactsFromServer(observ) {
    this.loaderService.setLoaderStatus(true);
    this.communicationService.getHttp(API.getContacts).subscribe( ( data ) => {
      observ.next(data);
    }, ( error ) => {
      // this.errorDialogService.showDialog();
    }, () => {
      this.loaderService.setLoaderStatus(false);
    });
  }
}
