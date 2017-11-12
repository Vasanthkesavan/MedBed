import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import {ServerService} from "../server.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material";
import { PatientChartComponent } from './patient-chart/patient-chart.component';
import {MatGridListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { PractionersComponent } from './practioners/practioners.component';



@NgModule({
  declarations: [
    AppComponent,
    MedicalHistoryComponent,
    PatientChartComponent,
    PractionersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
