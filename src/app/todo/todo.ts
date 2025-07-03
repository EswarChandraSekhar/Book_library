import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {

  activeTab: string = 'todolist'
  handleActiveTab(value: string){
    this.activeTab = value;
  }

}
