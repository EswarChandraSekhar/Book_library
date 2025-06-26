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
  author: string = ''
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
    if(this.title === '' || this.author === ''
    || this.genre === '' || this.description === null ||
    this.image_url === ''){
      alert('All fields are mandatory!')
      return;
    }

    console.log(this.authorList)
    console.log(this.author)
    let selected_author_list = this.authorList.filter(obj => {
                  if (obj.id === this.author) {
                    return true;
                  }
                  else {
                    return false;
                  }
                })

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
