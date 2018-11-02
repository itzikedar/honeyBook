import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommunicationService {
  public headers: any;
  constructor(
    private http: HttpClient,
  ) {
  }
  public getHttp(url) {
    return this.http.get(url, {headers: this.headers});
  }
}
