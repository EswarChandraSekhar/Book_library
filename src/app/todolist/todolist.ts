import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service';

@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist implements OnInit{
  tasks: any[] = []
  todolistloader:boolean = true;



  constructor(private todoservice: TodoService){}

  ngOnInit(): void {
    this.todolistloader = true;
    this.todoservice.gettodoList().subscribe(
      (Response)=>{
        this.tasks = Response
        this.todolistloader = false;
      },
      (error)=>{
        this.todolistloader = false;

      } 
    )

    console.log(Response)
    
  }



}
