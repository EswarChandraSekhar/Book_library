import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getBookList(): Observable<any> {
    return this.http.get<any>(this.url + '/api/books');
  }

  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/books', book);
  }

  deleteBook(book: any): Observable<any> {
    return this.http.delete<any>(this.url + '/api/books/' + book.bookId);
  }
}
