import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URI } from 'src/app/app.constants';
import { ToDo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodosByUser(username){
    return this.http.get<ToDo[]>(`${API_URI}/users/${username}/todos`);
  }

  retrieveTodoById(username, id){
    return this.http.get<ToDo>(`${API_URI}/users/${username}/todos/${id}`);
  }

  createTodo(username, todo){
    return this.http.post(`${API_URI}/users/${username}/todos`, todo);
  }

  updateTodo(username, id, todo){
    return this.http.put(`${API_URI}/users/${username}/todos/${id}`, todo);
  }

  deleteTodoById(username, id){
    return this.http.delete<ToDo>(`${API_URI}/users/${username}/todos/${id}`);
  }
}
