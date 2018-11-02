import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../common/contacts.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})
export class MainComponent implements OnInit {
  public contactsList: Object;
  constructor(
    private contactsService: ContactsService
  ) {}
  public ngOnInit() {
    this.contactsService.getContactsObserv().subscribe( (data) => {
      this.contactsList = data;
    } );
  }
}
