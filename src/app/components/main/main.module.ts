import { BrowserModule } from '@angular/platform-browser';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsService } from '../../common/contacts.service';
import { CommunicationService } from '../../common/http.service';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './main.routes';
import { Translate } from '../../common/translate.module';
import { Phonepipe } from '../../common/pipes/phone.pipe';

// Components
import { ContactBoxComponent } from './contactBox/contactBox.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    MainComponent,
    ContactBoxComponent,
    HeaderComponent,
    Phonepipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Translate,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [
    ContactsService,
    CommunicationService
  ],
})
export class MainModule { }
