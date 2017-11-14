import { Component, OnInit, Input } from '@angular/core';
import {ServerService} from "../../server.service";
import {Observable} from "rxjs/Observable";


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
  public urlPrevious;
  public urlNext: String;

  @Input() count1: Number;
  @Input() urlNext1: String;
  @Input() patientData1: String;

  constructor(private serverService: ServerService) { this.showHide = false; this.showStatusHide = false; this.tenDetail = [[], [], []]; this.aShow = false}

  ngOnInit() {
    this.count = this.count1;
    this.urlNext = this.urlNext1;
    this.patientData = this.patientData1;
  }

  getPreviousPatients(count: Number, url: String) {
      this.count = this.count - 10;
      this.serverService.toggleUrls(count, url)
        .subscribe(
          (response) => {
            this.patientData = response['entry'];
            if(response['link'][2]) {
              this.urlPrevious = response['link'][2].url;
            }
            this.urlNext = response['link'][1].url;
            console.log('this is the next url', this.urlNext)
          },
          (error) => {
            console.log(error);
          }
        )


  }

  getNextSetOfData(count: Number, url: String) {
    if(this.count >= 10 && this.count < 100) {
      this.count = this.count + 10;
      this.serverService.toggleUrls(count, url)
        .subscribe(
          (response) => {
            this.patientData = response['entry'];
            if(response['link'][1]) {
              this.urlNext = response['link'][1].url;
            }
            this.urlPrevious = response['link'][2].url;
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
          if(response) {
            for(let i = 0; i < response['entry'].length; i++) {
              this.tenDetail[2].push(response['entry'][i]['resource']['serviceProvider']['display'])
            }
          }
          },
        (error) => {
          console.log(error)
        }
      )
  }

  seeTheObservationsWholeB(patientID: String) {
     this.serverService.getAllEncounters(patientID)
      .subscribe(
        (response) => {
          if(response) {
            for(let i = 0; i < response['entry'].length; i++) {
              this.tenDetail[0].push(response['entry'][i]['resource']['subject']['display'])
            }
          }

        },
        (error) => console.log(error)
      )
  }

  seeTheObservationsWholeC(patientID: String) {
    return this.serverService.getAllEncounters(patientID)
      .subscribe(
        (response) => {
          if(response) {
            for(let i = 0; i < response['entry'].length; i++) {
              this.tenDetail[1].push(response['entry'][i]['resource']['participant'][0]['individual']['display'])
            }
          }
        }
      ),
      (error) => {
        console.log(error);
      }
  }

  allMethodCall(patientID: String) {
    this.seeTheHistory(patientID);
    this.seeTheCarePlan(patientID);
    this.seeTheConditions(patientID);
    this.seeTheCommunicationPlan(patientID);
    this.seeTheDiagnosticConditions(patientID);
    this.seeTheImmunization(patientID);
    this.seeTheObservations(patientID);
    this.seeTheMAdmin(patientID);
    this.seeTheMDispense(patientID);
    this.seeTheMRequest(patientID);
    this.seeTheProcedures(patientID);
    this.changeShowStatusVisualize();
    this.seeTheObservationsWholeA(patientID);
    this.seeTheObservationsWholeB(patientID);
    this.seeTheObservationsWholeC(patientID);
  }
}
