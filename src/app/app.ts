import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{

  loginStatus: boolean = false;
  loggedInUserData: any = null;
  constructor(private Router: Router, private authService: AuthService){}
  activeTab: string = 'home';

  ngOnInit(): void {
    this.authService.checkLogin().subscribe(res=>{
       
    })
    this.authService.loginStatus$.subscribe(res=>{
      this.loginStatus = res;
    })
    this.authService.loggedInUserData$.subscribe(res=>{
      this.loggedInUserData = res;
    })

    //active route setup
    let currentUrl = location.href;
    if(currentUrl.includes('books'))
    {
      this.activeTab = 'books'
    }
    else if(currentUrl.includes('book-management'))
    {
      this.activeTab = 'book-management'
    }
     else if(currentUrl.includes('add-book'))
    {
      this.activeTab = 'add-book'
    }
    else if(currentUrl.includes('author'))
    {
      this.activeTab = 'author'
    }
    else if(currentUrl.includes('todo'))
    {
      this.activeTab = 'todo'
    }
    else if(currentUrl.includes('login'))
    {
      this.activeTab = 'login'
    }

  }

  
  handleclick(path:any){
      this.Router.navigate(['/'+ path])
      this.activeTab = path;
  }

  handleLogout(){
    this.authService.logout()
    this.Router.navigate(['home'])
  }


  
 

}
