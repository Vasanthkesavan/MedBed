import { Component, OnInit } from '@angular/core';
import {ServerService} from "../../server.service";

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  public patientData;
  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getAllPatients()
      .subscribe(
        (response) => {
          this.patientData = JSON.parse(response.text())
          console.log(this.patientData);
        },
        (error) => console.log(error)
      )
  }

}
