import { Component } from '@angular/core';
import {TodoService} from "../../services/todo/todo.service";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  content: string = "";

  constructor(private _servTodo: TodoService) {}

  addTodo(content: string): void {
    this._servTodo.addTodo(content);
  }
}
