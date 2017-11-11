import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import {ServerService} from "../server.service";

@NgModule({
  declarations: [
    AppComponent,
    MedicalHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
