import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-chart',
  templateUrl: './patient-chart.component.html',
  styleUrls: ['./patient-chart.component.css']
})
export class PatientChartComponent implements OnInit {
  public doughnutChartLabels:string[] = ['Encounters', 'Care Plan', 'Communication', 'Conditions', 'Diagnostic Report', 'Immunization', 'Observation', 'Medicine Administration', 'Medicine Request', 'Procedures'];

  public doughnutChartDat:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public doughnutChartType:string = 'doughnut';

  @Input() doughnutChartData;

  constructor() { }

  ngOnInit() {
    this.doughnutChartDat = this.doughnutChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
