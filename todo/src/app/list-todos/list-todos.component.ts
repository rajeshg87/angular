import { Component, OnInit } from '@angular/core';

export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new ToDo(1, 'Buy an Apartment', false, new Date()),
    new ToDo(2, 'Apply for Loan', false, new Date()),
    new ToDo(3, 'Apply for new Job', false, new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
