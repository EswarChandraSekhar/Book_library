import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook implements OnInit {

  title: string = ''
  author: string = ''
  genre: string = ''
  description: string = ''
  image_url: string = ''



  books: any[] = []

  constructor(public Bookservice: BookService, public Router: Router){}

  ngOnInit(): void {
    this.books = this.Bookservice.getbookList()
  }

  handleSubmit(){
    if(this.title === '' || this.author === ''
    || this.genre === '' || this.description === null ||
    this.image_url === ''){
      alert('All fields are mandatory!')
      return;
    }

    let book = {
      title: this.title,
      author: this.author,
      genre: this.genre,
      description: this.description,
      image_url: this.image_url
    }

    this.Bookservice.addbookList(book)

    this.Router.navigate(['/books'])





  }

}
