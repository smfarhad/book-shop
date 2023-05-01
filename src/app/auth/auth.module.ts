import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class AuthModule { }
