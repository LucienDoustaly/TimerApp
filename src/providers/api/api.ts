import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class ApiProvider {

  random: number;
  user: Observable<any>;
  name: String;
  action: Observable<any>;
  activity: String;

  constructor(public http: HttpClient) { 
  }
 
  rand(){
    return this.random = Math.floor(Math.random() * 47);
  }

  getUser() {
    this.rand();
    console.log('random user : ', this.random);
    return this.http.get('https://isenenslipapi.herokuapp.com/user/'+this.random);
  }

  getAction() {
    this.rand();
    console.log('random activity : ', this.random);
    return this.http.get('https://isenenslipapi.herokuapp.com/action/'+this.random);
  }

  play(){
    this.user = this.getUser();
    this.user
    .subscribe(data => {
      console.log('my data: ', data.name);
      this.name = data.name;
    });
    this.action = this.getAction();
    this.action
    .subscribe(data => {
      console.log('my data: ', data.activity);
      this.activity = data.activity;
    });
  }

}