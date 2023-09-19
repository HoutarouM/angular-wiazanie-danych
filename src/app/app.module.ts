import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo-list/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoFormComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
