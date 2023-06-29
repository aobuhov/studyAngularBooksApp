import { Component } from '@angular/core';
import {Login} from "../../models/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: Login = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  constructor(private authService: AuthService) {
  }

  submit() {
    this.authService.login(this.form);
  }


  isLoading(): boolean {
    return this.authService.isLoading;
  }

  protected readonly onsubmit = onsubmit;
}
