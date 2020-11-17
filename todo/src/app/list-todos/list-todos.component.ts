import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

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
  todos;
  actionMessage;

  constructor(private todoService: TodoDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos(){
    this.todoService.retrieveAllTodosByUser('Rajesh').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodoById(id){
    this.todoService.deleteTodoById('Rajesh', id).subscribe(
      response =>  {
        this.actionMessage = `Delete Todo ${id} success`;
        this.getAllTodos();
      }
    );
  }

  updateTodoById(id){
    console.log(id);
    this.router.navigate(['todos', id]);
  }

  createTodo(){
    this.router.navigate(['todos', -1]);
  }

}
