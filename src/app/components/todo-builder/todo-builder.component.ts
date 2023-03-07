import {Component, Input} from '@angular/core';
import {TodoModel} from "../../models/todo.model";

@Component({
  selector: 'app-todo-builder',
  templateUrl: './todo-builder.component.html',
  styleUrls: ['./todo-builder.component.scss']
})
export class TodoBuilderComponent {
  @Input() todos: TodoModel[] = [];

  constructor() {}

}
