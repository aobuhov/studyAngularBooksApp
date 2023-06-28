import { Component } from '@angular/core';
import {Login} from "../../models/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form:Login = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  submit() {

  }
}
