import { Component } from '@angular/core';
import {Login} from "../../models/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: Login = {
    username: '',
    password: ''
  }

  submit() {
    console.log(this.form)
  }

  protected readonly onsubmit = onsubmit;
}
