import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = ''
  password: string = ''
  constructor(private authService: AuthService,private snackbar: MatSnackBar){

  }
  handleLogin(){
    if(this.email === '' || this.password === ''){
        this.snackbar.open('Incorrect Email/Password!','error',{duration:5000})
        return;
    }
    let data = {
      email: this.email,
      password: this.password
    }

    this.authService.login(data).subscribe(
      res=>{
        this.snackbar.open("Login verified successfully!",'success',{duration:5000})
      }
    )

  }
}
