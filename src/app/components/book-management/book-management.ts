import { Component } from '@angular/core';
import { BookManagementService } from '../book-management-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from '../../book-service';

@Component({
  selector: 'app-book-management',
  standalone: false,
  templateUrl: './book-management.html',
  styleUrl: './book-management.css'
})
export class BookManagement {

  books: any[] = [];
  bookListLoader: boolean = true;
  selectedBook: any = null;
  enableEdit: boolean = false;

  constructor(
    private BookManagementService: BookManagementService,
    private snackBar: MatSnackBar,
    private bookservice: BookService
  ) {}

  ngOnInit(): void {
    this.bookListLoader = true;
    this.loadBooks();
  }

  loadBooks(): void {
    this.BookManagementService.getBookList().subscribe(
      (response) => {
        this.books = response;
        this.bookListLoader = false;
      },
      (error) => {
        this.bookListLoader = false;
      }
    );
  }

  successNotification(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 5000,
      panelClass: ['snack-success']
    });
  }

onDelete(book: any) {
  this.BookManagementService.deleteBook(book).subscribe(
    (response) => {
      this.successNotification('Book "' + book.title + '" Deleted Successfully!');
      this.books = this.books.filter(obj => {
        if (obj.bookId === book.bookId) {
          return false;
        }
         else {
          return true;
        }
      });
    },
    (error) => {
    }
  );
}

onEdit(book: any){
  this.selectedBook = book;
  this.enableEdit = true;
}

handleBack(){
  this.selectedBook = null;
  this.enableEdit = false;
}


handleTaskUpdated(){
  this.selectedBook = null;
  this.enableEdit = false;
  this.bookListLoader = true;
   this.bookservice.getBookList().subscribe(
      (Response)=>{
        this.books = Response
        this.bookListLoader = false;
      },
      (error)=>{
        this.bookListLoader = false;

      } 
    )
}


}
