import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBean(){
    const basicAuthString = this.createBasicAuthString();

    const headers = new HttpHeaders({
      Authorization: basicAuthString
    });
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean', { headers } );
  }

  createBasicAuthString(){
    const user = 'rajesh';
    const password = 'rajesh';
    const basicAuthString = 'Basic ' + window.btoa(user + ':' + password);
    return basicAuthString;
  }
}
