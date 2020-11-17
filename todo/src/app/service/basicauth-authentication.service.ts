import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthAuthenticationService {

  constructor(private http: HttpClient) { }

  executeBasicAuthencationService(username, password){

    const basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuthString
    });
    return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth', { headers } )
    .pipe(
      map(
        data => {
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('token', basicAuthString);
          return data;
        }
      )
    );
  }

  getUser(){
    return sessionStorage.getItem('username');
  }

  getToken(){
    if (this.getUser) {
      return sessionStorage.getItem('token');
    }
  }

  isUserAuthenticted(){
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

}

export class AuthenticationBean{
  constructor(public message: string) {}
}
