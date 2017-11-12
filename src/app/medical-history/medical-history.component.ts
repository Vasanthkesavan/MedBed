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
  public doughnutChartData:number[] = [];
  public showHide: Boolean;
  public showStatusHide: Boolean;
  public showHide1;
  public tenDetail;
  public aShow;

  constructor(private serverService: ServerService) { this.showHide = false; this.showStatusHide = false; this.tenDetail = [[], [], []]; this.aShow = false}

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
      this.count = this.count - 10;
      console.log('this is the count', this.count);
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
          if(this.doughnutChartData.length > 0) {
            this.doughnutChartData = [];
          }
          this.encountersTotal = response['total'];
          this.doughnutChartData.push(response['total']);

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

          this.carePlanTotal = response['total'];
          this.doughnutChartData.push(response['total']);

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

          this.communicationTotal = response['total'];
          this.doughnutChartData.push(response['total']);

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

          this.conditionsTotal = response['total'];
          this.doughnutChartData.push(response['total']);

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

          this.dTotal = response['total'];
          this.doughnutChartData.push(response['total']);

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

          this.iTotal = response['total'];
          this.doughnutChartData.push(response['total']);

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
          this.oTotal = response['total'];
          this.doughnutChartData.push(response['total']);
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
          this.MATotal = response['total'];
          this.doughnutChartData.push(response['total']);
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

          this.MDTotal = response['total'];
          this.doughnutChartData.push(response['total']);
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
          this.MRTotal = response['total'];
          this.doughnutChartData.push(response['total']);
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
          this.pTotal = response['total'];
          this.doughnutChartData.push(response['total']);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  changeShowStatus() {
    this.showHide = !this.showHide;
  }

  changeShowStatusVisualize() {
    this.showStatusHide = !this.showStatusHide;
  }

  changeShowStatus1() {
    this.showHide1 = !this.showHide1;
  }

  seeTheObservationsWholeA(patientID: String) {
    this.serverService.getAllEncounters(patientID)
      .subscribe(
        (response) => {
          for(var k in response['entry']) {
            for (var a in response['entry'][k]) {
              for (var b in response['entry'][k][a]) {
                for (var c in response['entry'][k][a]['serviceProvider']) {
                  this.tenDetail[2].push(response['entry'][k][a]['serviceProvider']['display']);
                }
              }
            }
          }},
        (error) => {
          console.log(error)
        }
      )
  }

  seeTheObservationsWholeB(patientID: String) {
    this.serverService.getAllEncounters(patientID)
      .subscribe(
        (response) => {
          for(var k in response['entry']) {
            for(var a in response['entry'][k]) {
              for(var b in response['entry'][k][a]) {
                for(var c in response['entry'][k][a]['subject']) {
                  this.tenDetail[0].push(response['entry'][k][a]['subject']['display'])
                }
              }
            }
          }
        },
        (error) => console.log(error)
      )
  }

  seeTheObservationsWholeC(patientID: String) {
    this.serverService.getAllEncounters(patientID)
      .subscribe(
        (response) => {
          for(var k in response['entry']) {
            for(var a in response['entry'][k]) {
              for(var b in response['entry'][k][a]) {
                for(var c in response['entry'][k][a]['participant']) {
                  this.tenDetail[1].push(response['entry'][k][a]['participant'][0]['individual']['display'])
                }
              }
            }
          }
        }
      ),
      (error) => {
        console.log(error);
      }
  }

}
