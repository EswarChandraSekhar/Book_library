import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../author-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  standalone: false,
  templateUrl: './add-author.html',
  styleUrl: './add-author.css'
})
export class AddAuthor implements OnInit{

  authorId: any = null;
  authorname: string = ''
  authorimage: string = ''
  authordob: string = '';
  authornationality: string = ''
  authorbiography: string = ''

  authors: any[] = [];

   constructor(public AuthorService: AuthorService, public Router: Router ){}
  
    ngOnInit(): void {
      this.authors = this.AuthorService.getauthors()
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

    this.AuthorService.addauthorList(author)

    //this.authors.push(author)

    this.Router.navigate(['/author'])
  }


}
