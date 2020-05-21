import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<p> meu template </p>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = [];
  public tittle: String = 'Minhas tarefas';
  constructor() {
    this.todos.push(new Todo('ir ao mercado', false, 1));
    this.todos.push(new Todo('ir ao pet', false, 2));
    this.todos.push(new Todo('ir ao açougue', false, 3));
    this.todos.push(new Todo('ir ao entrevista', false, 4));
  }

  remove(todo: Todo): Todo {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    return todo;
  }
  markAsDone(todo: Todo) {
    todo.done = true;

  }
  markAsUndone(todo: Todo) {
    todo.done = false;
  }

  alterarTexto() {
    this.tittle = 'Teste Novo';
  }
}