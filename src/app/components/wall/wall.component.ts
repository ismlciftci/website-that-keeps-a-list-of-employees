import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  todos: Todo[];
  constructor(private TodoService: TodoService) { }

  

  ngOnInit(): void {
    this.todos = this.TodoService.GetTodos();
  }


  AddTodo(todoText: HTMLInputElement) {
   
    const obj = {
      text: todoText.value,
      createdAt: new Date ()
    }
    this.TodoService.AddTodo(obj);
    todoText.value ='';
  }

  RemoveTodo(todo: Todo) {Swal.fire({
    title: 'Silmek istediğine emin misin?',
    text: "Bu geri alınamaz!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Evet, Sil!',
    cancelButtonText : 'İptal'
  }).then((result) => {
   
    if (result.value) {
      this.TodoService.RemoveTodo(todo)
      Swal.fire(

        'Silindi!',
        'Eleman silindi.',
        'success'
        
      )
    }
  })
    
  }

}
