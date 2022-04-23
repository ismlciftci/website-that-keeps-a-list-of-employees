import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      text : 'ismail',
      createdAt : new Date ()
    },
    {
      text: 'yakup',
      createdAt: new Date ()
    }
  ]

  constructor() { }

  GetTodos(){
    return this.todos;
  }

  AddTodo(obj){
    this.todos.push(obj);
  }

  RemoveTodo(todo :Todo){
const index =this.todos.indexOf(todo);
this.todos.splice(index,1);
  }
}
