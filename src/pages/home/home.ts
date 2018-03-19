import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';
import { ApiProvider } from './../../providers/api/api';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(TimerComponent) timer: TimerComponent;
 
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) { 
    this.apiProvider.play();
  }
 
  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
 
}