import { Component, OnInit, Input } from '@angular/core';
import {ServerService} from "../../server.service";

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
  public path = '../../backenda.mp3';

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Doctors'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [

  ];


  constructor(private serverService: ServerService) {

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

  getTheAudioFile(org: String) {
    let toLoop = this.barChartData;
    let author = [];
    let initial;

    for(let i = 1; i < toLoop.length; i++) {
      initial = toLoop[0].data[0];
      if(initial < toLoop[i].data[0]) {
        initial = toLoop[i].label;

      }
    }
    author.push(initial);

    this.serverService.getTheAudioFile(author[0], org)
      .subscribe(
        (response) => {
          //console.log(JSON.stringify(response));
        },
        (error) => {
          console.log(error);
        }
      )
  }

  playTheAudio() {
    let x: HTMLVideoElement = document.getElementById("myAudio")[0];

    setTimeout(() => {
      x.play();
    }, 5000)

  }
}
