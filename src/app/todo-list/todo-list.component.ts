import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private data: TodoService) {}

  ngOnInit(): void {
    this.data.todoSource.subscribe((todos) => (this.todos = todos));
  }
}
