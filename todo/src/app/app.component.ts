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
    this.load();
    
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
    const id = this.todos.length + 1;
    this.todos.push(new Todo(tittle, false, id));
    this.save();
    this.clear();
  }
  clear() {
    this.form.reset();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }
  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  alterarTexto() {
    this.tittle = 'Teste Novo';
  }

  //salvando e lendo do LocalStorage
  save() {
    const data = JSON.stringify(this.todos);//converte json em string
    localStorage.setItem('todos', data);//ele pede um dictionary chave e valor, adicionando no LocalStorage
  }
  load(){
    const data = localStorage.getItem('todos');
    this.todos = JSON.parse(data);
  }
}