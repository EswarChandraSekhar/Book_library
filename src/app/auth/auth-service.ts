import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string  = 'http://localhost:3000/api/auth'
  authKey: string = "auth_token"
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(false)
  loginStatus$: Observable<boolean> = this.loginStatus.asObservable()

  constructor(private http: HttpClient) { }

  register(user: any):Observable<any>{
    return this.http.post(this.authUrl+ '/register', user).pipe(
      tap(
        (res:any)=>{
          this.setToken(res.token)
          this.loginStatus.next(true)
        }
      )
    )
  }

  login(data:any):Observable<any>{
    return this.http.post(this.authUrl + "/login",data).pipe(
      tap(
        (res:any)=>{
          this.setToken(res.token)
          this.loginStatus.next(true)
        }
      )
    )
  }

  logout(){
    this.loginStatus.next(false)
    localStorage.removeItem(this.authKey)
  }

  setToken(token: string){
      localStorage.setItem(this.authKey,token)
  }

  getToken(): string | null{
    return localStorage.getItem(this.authKey)
  }

  checkLogin(){
    let token = this.getToken()
    if(token){
      this.loginStatus.next(true)
    }
  }

}
