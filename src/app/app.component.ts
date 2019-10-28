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
export class AppComponent implements OnInit {

  rootPage = LoginComponent;
  public login = false;

  constructor(private loginService: LoginService) {

  }
  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    this.loginService.getStorageLoginState(LOCAL_STORAGE_LOGGED_USER_REFERENCE) === 'true' ? this.login = true : this.login = false;
  }





}
