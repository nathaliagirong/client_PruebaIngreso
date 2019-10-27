import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login-services/login.service';
import { LOCAL_STORAGE_LOGGED_USER_REFERENCE } from './util/constants';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  rootPage=LoginComponent;

  constructor(private loginService:LoginService){

  }
  ngOnInit() {
    throw new Error("Method not implemented.");
  }
  title = 'client';

  



}
