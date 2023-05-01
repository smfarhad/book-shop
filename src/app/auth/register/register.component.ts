import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/Interfaces/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    c_password: ''
  };
  constructor(private authService:AuthService){
  }
  submit() {
    this.authService.register(this.form);
  }
  isLoading(){
    return this.authService.isLoading;
  }
}
