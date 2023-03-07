import { Component } from '@angular/core';
import {TodoService} from "./services/todo/todo.service";
import {TodoModel} from "./models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: TodoModel[] = [];

  constructor(private _servTodo: TodoService) {}

  ngOnInit(): void {
    this._servTodo.todos$.subscribe((todos: TodoModel[]) => {
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {
    this._servTodo.todos$.unsubscribe();
  }
}
