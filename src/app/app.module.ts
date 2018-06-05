import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {DataServiceService} from './data-service.service'
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {trigger, state, style, transition, animate,keyframes} from '@angular/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule   
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
