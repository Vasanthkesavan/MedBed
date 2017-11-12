import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import {ServerService} from "../server.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MedicalHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
