import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  //get author list
  getAuthorList():Observable<any>{
    return this.http.get<any>(this.url+'/api/authors')
  }
  //add author
  addAuthor(author: any):Observable<any>{
    return this.http.post<any>(this.url+'/api/authors',author)
  }
  





  // addauthorList(author:any){
  //    let temp = localStorage.getItem('authorList')
  //    if(!temp){
  //     this.authors.push(author)
  //      localStorage.setItem('authorList',JSON.stringify(this.authors))
  //    }
  //    else{
  //       let authorList = JSON.parse(temp)
  //       authorList.push(author)
  //       localStorage.setItem('authorList',JSON.stringify(authorList))
  //    }
    
  // }

  // getauthors() {

  //   let temp = localStorage.getItem('authorList')
  //   if(!temp){
  //     localStorage.setItem('authorList',JSON.stringify(this.authors))
  //   }
  //   else{
  //     return JSON.parse(temp)
  //   }
  // }
}
