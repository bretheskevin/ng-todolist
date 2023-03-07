import { Component } from '@angular/core';
import {TodoService} from "../../services/todo/todo.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  content: string = "";

  constructor(private _servTodo: TodoService,
              private toastr: ToastrService
              ) {}

  addTodo(content: string): void {
    if (content === "") {
        this.toastr.error("Please enter a todo");
      return;
    }

    this._servTodo.addTodo(content);
  }

  deleteCompleted() {
    let currentCount = this._servTodo._todos.length;
    this._servTodo.deleteCompleted();

    let newCount = this._servTodo._todos.length;

    let difference = currentCount - newCount;

    if (difference === 0) {
      this.toastr.warning("No completed todos to delete");
      return;
    }

    this.toastr.success(`${difference} completed todos deleted`);
  }
}
