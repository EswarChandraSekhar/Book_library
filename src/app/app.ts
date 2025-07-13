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
  constructor(private Router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.authService.checkLogin()
    this.authService.loginStatus$.subscribe(res=>{
      this.loginStatus = res;
    })

  }

  activeTab: string = 'home';
  
  handleclick(path:any){
      this.Router.navigate(['/'+ path])
      this.activeTab = path;
  }

  handleLogout(){
    this.authService.logout()
  }


  
 

}
