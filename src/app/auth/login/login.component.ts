import { Component } from '@angular/core';
import {Login} from "../../models/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

  isLoading: boolean = false;

  submit() {
    if(this.isLoading) {
      return;
    }
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('login successfully')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('credentials wrong')
      }).finally(()=>{this.isLoading = false;});

  }

  protected readonly onsubmit = onsubmit;
}
