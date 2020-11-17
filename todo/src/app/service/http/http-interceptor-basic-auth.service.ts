import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthAuthenticationService } from '../basicauth-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    const basicAuthString = this.basicAuthenticationService.getToken();
    const username = this.basicAuthenticationService.getUser();

    if (username && basicAuthString){
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      });
    }
    return next.handle(request);
  }

}
