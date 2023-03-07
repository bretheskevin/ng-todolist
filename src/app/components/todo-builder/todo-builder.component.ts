import {Component, Input} from '@angular/core';
import {TodoModel} from "../../models/todo.model";
import {TodoService} from "../../services/todo/todo.service";

@Component({
  selector: 'app-todo-builder',
  templateUrl: './todo-builder.component.html',
  styleUrls: ['./todo-builder.component.scss']
})
export class TodoBuilderComponent {
  @Input() todos: TodoModel[] = [];

  constructor() {}

}
