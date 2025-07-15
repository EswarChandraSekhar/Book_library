import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { Register } from './register/register';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
