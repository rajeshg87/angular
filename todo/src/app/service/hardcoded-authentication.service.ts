import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    this.isUserAuthenticted();
    if (username === 'rajesh' && password === 'rajesh'){
      sessionStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  isUserAuthenticted(){
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('username');
  }

}
