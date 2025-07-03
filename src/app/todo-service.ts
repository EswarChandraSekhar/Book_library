import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  gettodoList():Observable<any>{
    return this.http.get<any>(this.url+'/api/todos')
  }

  addtodoList(task: any):Observable<any>{
    return this.http.post<any>(this.url+'/api/todos', task)
  }


}
