import { Component } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrls: ['./register.css']  
})
export class Register {

  
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: any = '';

  constructor(private authSerivce: AuthService){
    
  }

  handleSubmit() {
    if (
      this.firstName === '' ||
      this.lastName === '' ||
      this.email === '' ||
      this.password === '' ||
      this.phoneNumber === ''
    ) {
      alert('All fields are required');
      return;
    }

    let user = {
      firstName:  this.firstName,  
      lastName:  this.lastName,  
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber
    };
    this.authSerivce.register(user).subscribe(
      res=>{
        localStorage.setItem('auth_token',res.token)
      }
    )


  }
  logout(){
    this.authSerivce.logout()
  }
}
