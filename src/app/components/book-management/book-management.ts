import { Component } from '@angular/core';
import { BookManagementService } from '../book-management-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-management',
  standalone: false,
  templateUrl: './book-management.html',
  styleUrl: './book-management.css'
})
export class BookManagement {

  books: any[] = [];
  bookListLoader: boolean = true;

  constructor(
    private BookManagementService: BookManagementService,
    private snackBar: MatSnackBar
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


}
