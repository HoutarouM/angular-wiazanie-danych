import { Component, EventEmitter, Output } from '@angular/core';

import { Todo } from '../todo-list/todo.interface';
import { TodoService } from '../todo-list/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent {
  counter: number = 1;
  todoText: string = '';

  constructor(private data: TodoService) {}

  onSubmit(): void {
    const todo: Todo = {
      id: this.counter,
      todo: this.todoText,
      created: new Date(),
      isDone: false,
    };

    this.data.addTodo(todo);

    this.counter++;
  }
}
