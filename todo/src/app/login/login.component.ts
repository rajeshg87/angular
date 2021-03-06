import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BasicAuthAuthenticationService } from '../service/basicauth-authentication.service';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'rajesh';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthAuthenticationService
              ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeBasicAuthencationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }

}
