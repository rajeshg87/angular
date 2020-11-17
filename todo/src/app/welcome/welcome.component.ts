import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username = '';
  welcomeMessageFromService;

  constructor(private route: ActivatedRoute,
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params.name;
  }

  getWelcomeMessage(){
    this.welcomeDataService.executeHelloWorldBean().subscribe(
      response => this.sucessHandler(response),
      error => this.errorHandler(error)
    );
  }

  sucessHandler(response){
    this.welcomeMessageFromService = response.message;
    console.log(this.welcomeMessageFromService);
  }

  errorHandler(error){
    this.welcomeMessageFromService = error.error.message;
  }

}
