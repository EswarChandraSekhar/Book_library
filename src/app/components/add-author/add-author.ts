import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../../author-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-author',
  standalone: false,
  templateUrl: './add-author.html',
  styleUrl: './add-author.css'
})
export class AddAuthor implements OnInit{
  @Input() preAuthorData: any = null;
  @Output() authorUpdated: any = new EventEmitter()
  authorId: any = null;
  authorname: string = ''
  authorimage: string = ''
  authordob: string = '';
  authornationality: string = ''
  authorbiography: string = ''

  authors: any[] = [];

   constructor(public AuthorService: AuthorService, public Router: Router, public snackbar: MatSnackBar ){}
  
    ngOnInit(): void {
      if(this.preAuthorData !== null){
        this.authorId = this.preAuthorData.id;
        this.authorname = this.preAuthorData.name;
        this.authorimage = this.preAuthorData.image;
        this.authordob = this.preAuthorData.dob;
        this.authornationality = this.preAuthorData.nationality;
        this.authorbiography = this.preAuthorData.biography;
      }
    }
  

  handleSubmit(){
    if (this.authorId === '' || this.authorname === '' 
      || this.authordob === '' || this.authornationality === null ||
      this.authorbiography === '') {
      alert('All fields are mandatory!')
      return;
    }

    let author = {
      id: this.authorId,
      image: this.authorimage,
      name: this.authorname,
      dob: this.authordob,
      nationality: this.authornationality,
      biography: this.authorbiography
    }
    if(this.preAuthorData === null){
      this.AuthorService.addAuthor(author).subscribe(
        (response)=>{
          this.Router.navigate(['/author'])
        },
        (error)=>{

        }
      )   
    }
    else{

      this.AuthorService.updateAuthor(this.preAuthorData.id,author).subscribe(
        (response)=>{
          this.authorUpdated.emit()
          this.snackbar.open('Author Updated Successfully!','success',{duration:3000,panelClass:"snack-success"})
        },
        (error)=>{

        }
      )
    }
   
  }


}
