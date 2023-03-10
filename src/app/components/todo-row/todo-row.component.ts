import {Component, Input} from '@angular/core';
import {TodoModel, TodoState} from "../../models/todo.model";
import {TodoService} from "../../services/todo/todo.service";

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.scss']
})
export class TodoRowComponent {
  @Input() todo!: TodoModel;

  constructor(private _servTodo: TodoService) {}

  deleteTodo() {
    this._servTodo.deleteTodoById(this.todo.id);
  }

  completeTodo() {
    this._servTodo.completeTodoById(this.todo.id);
  }

  stateColorButton() {
    switch (this.todo.state) {
      case TodoState.Active:
        return "orange";
      case TodoState.Completed:
        return "green";
      default:
        return "";
    }
  }

  switchComplete() {
    if (this.todo.state === TodoState.Active) {
      this.completeTodo();
    } else {
      this._servTodo.activateTodoById(this.todo.id);
    }
  }

  stateToString() {
    switch (this.todo.state) {
      case TodoState.Active:
        return "To do";
      case TodoState.Completed:
        return "Completed";
      default:
        return "Unknown";
    }
  }
}
