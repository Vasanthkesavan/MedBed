import {Component, OnInit} from '@angular/core';
import {ServerService} from "../server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showHide: Boolean;
  public count;
  public urlNext;
  public patientData;

  constructor(private serverService: ServerService) {
    this.showHide = false;
  }

  ngOnInit() {
    this.serverService.getAllPatients()
      .subscribe(
        (response) => {
          this.patientData = response['entry'];
          this.urlNext = response['link'][1].url;
          this.count = 10;
        },
        (error) => console.log(error)
      )
  }
  changeShowStatus() {
    this.showHide = !this.showHide;
  }

}
