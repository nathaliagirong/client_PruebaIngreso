import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setStorageLoginState(key:string, value:string){
    localStorage.setItem(key,value);
  }

  getStorageLoginState(key:string){
    return localStorage.getItem(key);
    
  }
}


