import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string = "http://localhost:3000"
  constructor(private http: HttpClient){}


  //get book list 
  getBookList():Observable<any>{
    return this.http.get<any>(this.url+"/api/books")
  }
  //post book
  addBook(book:any):Observable<any>{
    return this.http.post<any>(this.url+"/api/books",book)
  }
  //get book details
  getBookDetail(bookId: any):Observable<any>{
    return this.http.get<any>(this.url+"/api/books/"+bookId)
  }



  // addbookList(book:any){
  //   this.books.push(book)
  // }

  // getbookList(){
  //   return this.books
  // }




 
}
