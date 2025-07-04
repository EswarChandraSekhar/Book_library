import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-todolist',
  standalone: false,
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist implements OnInit{
  tasks: any[] = []
  todolistloader:boolean = true;
  enableEdit: boolean = false;
  selectedTodo: any = null;



  constructor(private todoservice: TodoService, private snackBar: MatSnackBar){}

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

  successNotification(value: string){
     this.snackBar.open(value,'close',{
          duration:5000,
          panelClass: ['snack-success'] 
        })
  }

  onDelete(todo: any) {
  this.todoservice.deleteTodo(todo.id).subscribe(
    (response) => {
      this.successNotification('Todo "' + todo.title + '" Deleted Successfully!');
      this.tasks = this.tasks.filter(obj => {
        if (obj.id === todo.id) {
          return false;
        } else {
          return true;
        }
      });
    },
    (error) => {
    }
  );
}

onEdit(todo: any){
    this.selectedTodo = todo;
    this.enableEdit = true;
}
handleBack(){
  this.selectedTodo = null;
  this.enableEdit = false;
}

handleTaskUpdated(){
  this.selectedTodo = null;
  this.enableEdit = false;
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
}








}
