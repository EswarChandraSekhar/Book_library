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

  books: any[] = []

  constructor(public Bookservice: BookService, public MatDialog: MatDialog){}

  ngOnInit(): void {
    this.books = this.Bookservice.getbookList()
  }

  handleview(book: any) {
    this.MatDialog.open(BookDetailDialogue, {
      width: '400px',
      data: book  // passing book data to dialog
    });
  }



}
