import { Injectable } from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {Login} from "../models/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  isLoading:boolean = false;

  constructor(private router: Router) { }
  login(form: Login){
    if(this.isLoading) {
      return;
    }
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(()=>{this.isLoading = false;});

  }

  passwordMatched: boolean = true;
  register(form: Login) {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    if (form.password !== form.confirmPassword) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        this.isAuthenticated = true;
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(()=>{this.isLoading = false});
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }
}
