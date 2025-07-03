import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from '../../author-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  standalone: false,
  templateUrl: './add-author.html',
  styleUrl: './add-author.css'
})
export class AddAuthor implements OnInit{
  @Input() preAuthorData: any = null;
  authorId: any = null;
  authorname: string = ''
  authorimage: string = ''
  authordob: string = '';
  authornationality: string = ''
  authorbiography: string = ''

  authors: any[] = [];

   constructor(public AuthorService: AuthorService, public Router: Router ){}
  
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

    this.AuthorService.addAuthor(author).subscribe(
      (response)=>{
         this.Router.navigate(['/author'])
      },
      (error)=>{

      }
    )    
  }


}
