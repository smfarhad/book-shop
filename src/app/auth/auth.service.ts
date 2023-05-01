import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { LoginForm, RegisterForm } from '../Interfaces/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = false;

  constructor(private router: Router) { }

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        this.isAuthenticated = true;
        const user = userCredential.user;
        console.log(user);
        console.log('Success');
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = true;
        console.log('Failed');
      }).finally(() => {
        this.isLoading = false;
      })
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    if (form.password != form.c_password) {
      this.passwordMatched = false;
    }
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isAuthenticated = true;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
    }).catch((error) => {
      // An error happened.
    });
  }
}
