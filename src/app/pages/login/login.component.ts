import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';

  constructor() { }

  ngOnInit() {
  }

  login(){
    window.alert(`Servicio ${this.email}`);
  }

}
