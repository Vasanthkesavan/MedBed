import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showHide: Boolean;
  public showHide1: Boolean;

  constructor() {
    this.showHide = false;
  }

  changeShowStatus() {
    this.showHide = !this.showHide;
  }

  changeShowStatus1() {
    this.showHide1 = !this.showHide1;
  }
}
