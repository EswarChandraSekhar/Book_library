import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book-service';
import { BookDetailDialogue } from '../../book-detail-dialogue/book-detail-dialogue';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrls: ['./books.css']
})
export class Books implements OnInit{
  searchbook: string = '';
  genre: string = 'all';
  bookLoader: boolean = true;
  books: any[] = []
  constructor(public Bookservice: BookService, public MatDialog: MatDialog){}

  ngOnInit(): void {
    this.bookLoader = true;
    this.Bookservice.getBookList().subscribe(
      (response)=>{
        this.books =  response;
        this.bookLoader = false;
      },
      (error)=>{
        this.bookLoader = false;
      }
    )
  }

  handleview(book: any) {
    this.MatDialog.open(BookDetailDialogue, {
      width: '400px',
      data: book  // passing book data to dialog
    });
  }



}
