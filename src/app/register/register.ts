import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrls: ['./register.css']  
})
export class Register {
  fullname: string = '';
  email: string = '';
  password: any = '';
  confirmpassword: any = '';

  handleSubmit() {
    if (
      this.fullname === '' ||
      this.email === '' ||
      this.password === '' ||
      this.confirmpassword === ''
    ) {
      alert('All fields are required');
      return;
    }

    let user = {
      fullname: this.fullname,  
      email: this.email,
      password: this.password,
      confirmpassword: this.confirmpassword
    };

    console.log(user);
  }
}
