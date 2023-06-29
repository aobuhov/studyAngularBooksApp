import { Component } from '@angular/core';
import {Login} from "../../models/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
  isLoading: boolean = false;

  passwordMatched: boolean = true;
  submit() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    if (this.form.password !== this.form.confirmPassword) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(()=>{this.isLoading = false});
  }
}
