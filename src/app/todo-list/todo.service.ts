import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  todoSource: Subject<Todo[]> = new Subject();

  constructor() {}

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.todoSource.next(this.todos);
  }
}
