import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LOCAL_STORAGE_LOGGED_USER_REFERENCE } from '../util/constants';
import { LoginService } from '../services/login-services/login.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService,
    ) { }
    canActivate() {
        if (this.loginService.getStorageLoginState(LOCAL_STORAGE_LOGGED_USER_REFERENCE) !== 'true') {
            return true;
        } else {
            this.router.navigate(['users']);
        }
    }
}