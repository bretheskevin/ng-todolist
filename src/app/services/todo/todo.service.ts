import { Injectable } from '@angular/core';
import {TodoModel, TodoState} from "../../models/todo.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  _lastId = 1;
  _todos: TodoModel[] = [];
  todos$: BehaviorSubject<TodoModel[]>;

  constructor() {
    this.todos$ = new BehaviorSubject<TodoModel[]>(this._todos);
  }

  addTodo(content: string) {
    this._todos.push({
      id: this._lastId++,
      content,
      state: TodoState.Active
    });
    this.todos$.next(this._todos);
  }

  deleteTodoById(id: number) {
    this._todos = this._todos.filter((todo: TodoModel) => todo.id !== id);
    this.todos$.next(this._todos);
  }

  completeTodoById(id: number) {
    this._todos = this._todos.map((todo: TodoModel) => {
      if (todo.id === id) {
        todo.state = TodoState.Completed;
      }
      return todo;
    });
    this.todos$.next(this._todos);
  }

  activateTodoById(id: number) {
    this._todos = this._todos.map((todo: TodoModel) => {
      if (todo.id === id) {
        todo.state = TodoState.Active;
      }
      return todo;
    });
    this.todos$.next(this._todos);
  }

  deleteCompleted() {
    this._todos = this._todos.filter((todo: TodoModel) => todo.state === TodoState.Active);
    this.todos$.next(this._todos);
  }
}
