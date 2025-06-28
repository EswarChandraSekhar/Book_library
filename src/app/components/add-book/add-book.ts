import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book-service';
import { AuthorService } from '../../author-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook implements OnInit {

  title: string = ''
  authorId: string = ''
  genre: string = ''
  description: string = ''
  image_url: string = ''



  books: any[] = []
  authorList: any[] = []

  constructor(public Bookservice: BookService, public Router: Router,
    public authorService: AuthorService
  ){}

  ngOnInit(): void {
    this.books = this.Bookservice.getbookList()
    this.authorList = this.authorService.getauthors()
  }

  handleSubmit(){
    if(this.title === '' || this.authorId === ''
    || this.genre === '' || this.description === null ||
    this.image_url === ''){
      alert('All fields are mandatory!')
      return;
    }

    console.log(this.authorList)
    console.log(this.authorId)
    
    let selected_author_list = this.authorList.filter(obj => {
                  if (obj.id.toString() === this.authorId.toString()) {
                    return true;
                  }
                  else {
                    return false;
                  }
                })
             
    console.log(selected_author_list)

    let selected_author = selected_author_list[0]


    let book = {
      title: this.title,
      image: this.image_url,
      author: selected_author.name,
      authorId: selected_author.id,
      genre: this.genre,
      description: this.description,
      image_url: this.image_url
    }

    this.Bookservice.addbookList(book)

    this.Router.navigate(['/books'])
    





  }

}
