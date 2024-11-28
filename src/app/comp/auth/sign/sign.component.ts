import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormDataSignIn{
  email: string;
  password: string;
}
interface FormDataSignUp extends FormDataSignIn{
  name: string;
  confirmPassword: string;
}


@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule, MatSelectModule, FormsModule],
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})


export class SignComponent {
  //Login Handlling
  formDataSignIn : FormDataSignIn = {
    email: '',
    password: ''
  }
  handleLogin(event :Event){
    event.preventDefault();
    console.log(this.formDataSignIn);
  }


  //Create Account Handlling
  formDataSignUp : FormDataSignUp = {
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  }
  handleCreateAccount(event :Event){
    event.preventDefault();
    console.log(this.formDataSignUp);
  }



  //Slide Forms
  slideLeft = false;
  toggleForm() {
    this.slideLeft = !this.slideLeft;
  }
}
