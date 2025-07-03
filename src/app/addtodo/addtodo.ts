import { Component } from '@angular/core';
import { TodoService } from '../todo-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addtodo',
  standalone: false,
  templateUrl: './addtodo.html',
  styleUrl: './addtodo.css'
})
export class Addtodo {

  taskid: any = '';
  taskname: string = '';
  category: string = '';
  doneornot: string = '';

  constructor(private todoservice: TodoService, private router: Router){}

  handlesubmit(){
    if(this.taskid === '' || this.taskname === '' ||
      this.category === '' || this.doneornot === ''
    ){
      alert("please fill every field")
      return;
    }

    let task = {
      id: this.taskid,
      title: this.taskname,
      category: this.category,
      taskCompleted: this.doneornot
    }

    console.log(task)

    this.todoservice.addtodoList(task).subscribe(
      (Response)=>{
        this.router.navigate(['/todo'])
      },
      (error)=>{

      }
    )

  }









  

}
