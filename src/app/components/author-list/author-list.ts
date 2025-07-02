import { Component } from '@angular/core';
import { AuthorService } from '../../author-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditAuthorDialog } from '../edit-author-dialog/edit-author-dialog';
@Component({
  selector: 'app-author-list',
  standalone: false,
  templateUrl: './author-list.html',
  styleUrl: './author-list.css'
})
export class AuthorList {

  authors: any[] = []
  authorListLoader: boolean = true;

  constructor(public AuthorServiceService: AuthorService,private snackBar: MatSnackBar,
    private matDialog: MatDialog
  ){}

  ngOnInit(): void {
    this.authorListLoader = true;
    this.AuthorServiceService.getAuthorList().subscribe(
      (response)=>{
           this.authors = response;
           this.authorListLoader = false;
      },
      (error)=>{
          this.authorListLoader = false;
      }
    )
  }

  successNotification(value: string){
     this.snackBar.open(value,'close',{
          duration:5000,
          panelClass:"snack-success"
        })
  }

  onDelete(author:any){
    this.AuthorServiceService.deleteAuthor(author).subscribe(
      (response)=>{
        this.successNotification('Author '+author.name+' Deleted Successfully!')
        this.authors = this.authors.filter(obj =>{
            if(obj.id === author.id)
            {
              return false;
            }
            else{
              return true;
            }
        })
      },
      (error)=>{

      }
    )
  }

  onEdit(author:any){
    this.matDialog.open(EditAuthorDialog,{
      data: author,
      width:'600px'
    })
  }

}
