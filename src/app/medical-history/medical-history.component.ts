import { Component, OnInit } from '@angular/core';
import {ServerService} from "../../server.service";
import { Http } from "@angular/http";

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  public patientData;
  public count;

  constructor(private serverService: ServerService, private http: Http) { }

  ngOnInit() {
    this.serverService.getAllPatients()
      .subscribe(
        (response) => {
          this.patientData = JSON.parse(response.text()).entry;
          this.count = 10;
        },
        (error) => console.log(error)
      )
  }

  getPreviousPatients(count: Number) {
    if(this.count !== 10) {
      this.count = this.count - 10;
      this.serverService.toggleUrls(count)
        .subscribe(
          (response) => {
            this.patientData = JSON.parse(response.text()).entry;
          },
          (error) => {
            console.log(error);
          }
        )
    }

  }

  getNextSetOfData(count: Number) {
    if(this.count >= 10 && this.count < 100) {
      this.count = this.count + 10;
      this.serverService.toggleUrls(count)
        .subscribe(
          (response) => {
            this.patientData = JSON.parse(response.text()).entry;
          },
          (error) => {
            console.log(error);
          }
        )
    }

  }
}
