import { Component } from '@angular/core';
import {Login} from "../../models/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form:Login = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService) {
  }

  passwordMatched: boolean = true;
  submit() {
    this.authService.register(this.form);
  }
  isLoading(): boolean {
    return this.authService.isLoading;
  }

}
