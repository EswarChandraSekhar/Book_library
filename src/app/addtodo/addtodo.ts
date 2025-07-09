import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addtodo',
  standalone: false,
  templateUrl: './addtodo.html',
  styleUrl: './addtodo.css'
})
export class Addtodo implements OnInit {
  @Input() taskData: any = null;
  @Output() taskUpdated: any = new EventEmitter()

  taskid: any = '';
  taskname: string = '';
  category: string = '';
  doneornot: string = '';

  constructor(private todoservice: TodoService, private router: Router){}

  ngOnInit(): void {
      if(this.taskData !== null){
        this.taskid = this.taskData.id;
        this.taskname = this.taskData.title;
        this.category  = this.taskData.category;
        this.doneornot = this.taskData.taskCompleted;
      } 
  }

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
    
    if(this.taskData === null){
      this.todoservice.addtodoList(task).subscribe(
        (Response)=>{
          this.router.navigate(['/todo'])
        },
        (error)=>{

        }
      )
    }
    else{
      this.todoservice.updateTodo(this.taskData.id,task).subscribe(
        (response)=>{
          this.taskUpdated.emit()
        },
        (error)=>{

        }
      )
    }
   

  }









  

}
