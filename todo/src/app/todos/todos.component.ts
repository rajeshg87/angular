import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  id: number;
  todo: ToDo;

  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.todo = new ToDo(this.id, '', false, new Date());

    if (this.id != -1){
      this.todoDataService.retrieveTodoById('Rajesh', this.id)
        .subscribe(
          data => this.todo = data
        );
    }
  }

  saveTodo(){
    if (this.id === -1){
      console.log(`ID : ${this.id}`);
    }else{
      this.todoDataService.updateTodo('Rajesh', this.id, this.todo)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
  }



}
