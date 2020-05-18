import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<p> meu template </p>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: any[] = [];
  public tittle: String = 'Minhas tarefas';
  constructor() {
    this.todos.push('teste');
    this.todos.push('teste');
    this.todos.push('teste');
    this.todos.push('teste');
    this.todos.push('teste');
  }

  alterarTexto(){
    this.tittle='Teste Novo';
  }
}