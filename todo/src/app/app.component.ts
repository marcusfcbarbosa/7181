import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<p> meu template </p>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: any[] = [];
    constructor() {
    this.todos.push('teste');
    this.todos.push('teste');
  }
}