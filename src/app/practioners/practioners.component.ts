import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-practioners',
  templateUrl: './practioners.component.html',
  styleUrls: ['./practioners.component.css']
})
export class PractionersComponent implements OnInit {
  @Input() tenDetail;
  public differentDoctors = {};
  public patientName;
  public organization;
  public doctors;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Doctors'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [

  ];


  constructor() {

  }

  ngOnInit() {
    let str = this.tenDetail[1];
    //let str1 = this.tenDetail[2];

    for (let x = 0, length = str.length; x < length; x++) {
      let l = str[x]
      this.differentDoctors[l] = (isNaN(this.differentDoctors[l]) ? 1 : this.differentDoctors[l] + 1);
      this.tenDetail.push(this.differentDoctors);
    }

    this.tenDetail.splice(1, 1);
    this.tenDetail.splice(2, 1);

    this.patientName = this.tenDetail[0][0];
    this.organization = this.tenDetail[1][0];
    this.doctors = this.tenDetail[2];

    for(let i in this.doctors) {
      this.barChartData.push({data: [this.doctors[i]], label: `${i}`})
    }
    console.log(this.barChartData)
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
