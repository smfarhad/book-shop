import { Component } from '@angular/core';
import { Forgot } from 'src/app/Interfaces/auth';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  form: Forgot = {
    'email': ''
  }
  submit() {

  }
}
