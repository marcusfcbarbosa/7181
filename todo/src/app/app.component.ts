import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<p> meu template </p>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: Todo[] = [];
  public tittle: String = 'Minhas tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tittle: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])]
    });


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

  add() {
    const tittle = this.form.controls['tittle'].value;
    const id = this.todos.length +1;
    this.todos.push(new Todo(tittle, false, id));

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