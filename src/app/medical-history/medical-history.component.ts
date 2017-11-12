import { Component, OnInit } from '@angular/core';
import {ServerService} from "../../server.service";


@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  public patientData;
  public count;
  public encountersTotal;
  public carePlanTotal;
  public communicationTotal;
  public conditionsTotal;
  public dTotal;
  public iTotal;
  public oTotal;
  public MATotal;
  public MDTotal;
  public MRTotal;
  public pTotal;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getAllPatients()
      .subscribe(
        (response) => {
          this.patientData = response['entry'];
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
            this.patientData = response['entry'];
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
            this.patientData = response['entry'];
          },
          (error) => {
            console.log(error);
          }
        )
    }
  }

  seeTheHistory(patientID: String) {
    console.log('Invoked with ID', patientID)
    this.serverService.getAllEncounters(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.encountersTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheCarePlan(patientID: String) {
    this.serverService.getAllCarePlan(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.carePlanTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheCommunicationPlan(patientID: String) {
    this.serverService.getAllCommunicationPlan(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.communicationTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheConditions(patientID: String) {
    this.serverService.getAllTheConditions(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.conditionsTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheDiagnosticConditions(patientID: String) {
    this.serverService.getAllTheDiagnosticConditions(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.dTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheImmunization(patientID: String) {
    this.serverService.getAllTheImmunization(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.iTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheObservations(patientID: String) {
    this.serverService.getAllTheObservations(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.oTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheMAdmin(patientID: String) {
    this.serverService.getAllTheMAdmin(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.MATotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheMDispense(patientID: String) {
    this.serverService.getAllTheMDispense(patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          let result = response['total'];

          this.MDTotal = JSON.stringify(result);
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheMRequest(patientID: String) {
    this.serverService.getAllTheMRequest (patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.MRTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  seeTheProcedures(patientID: String) {
    this.serverService.getAllTheProcedures (patientID)
      .subscribe(
        (response) => {
          console.log('this is the response', response)
          this.pTotal = response['total'];
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
