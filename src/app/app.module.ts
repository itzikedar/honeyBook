import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './components/main/main.module';
import { LoaderService } from './common/loader/loader.service';


import { LoaderComponent } from './common/loader/loader.component';

import {
  RouterModule
} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MainModule,
    RouterModule,
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
