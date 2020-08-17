import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  inputPassword:String;
  inputEmail:String;



  constructor(private formBuilder: FormBuilder, private toast: ToastService,private auth:AuthService) {
    this.loginForm = this.formBuilder.group({
      inputPassword: "",
      inputEmail: "",
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log(JSON.stringify(data))
    this.inputEmail = data.inputEmail;
    this.inputPassword = data.inputPassword;

    const loginObject = {
      password : this.inputPassword,
      email : this.inputEmail,
    };
    this.auth.loginUser(loginObject);
  }
 
  


}
