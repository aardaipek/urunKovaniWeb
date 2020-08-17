import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  memberType:String;
  inputPassword:String;
  inputEmail:String;
  inputLastname:String;
  inputName:String;
  acceptLaw:Boolean;


  constructor(private formBuilder: FormBuilder, private toast: ToastService,private auth:AuthService) {
    this.registerForm = this.formBuilder.group({
      memberType:"",
      inputPassword: "",
      inputEmail: "",
      inputLastname: "",
      inputName: "",
      acceptLaw: false
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log(JSON.stringify(data))
    this.inputEmail = data.inputEmail;
    this.inputPassword = data.inputPassword;
    this.inputLastname =  data.inputLastname;
    this.inputName = data.inputName;
    this.acceptLaw = data.acceptLaw;
    this.memberType = this.setMemberType()

    const regObject = {
      name : this.inputName,
      lastname : this.inputLastname,
      password : this.inputPassword,
      email : this.inputEmail,
      acceptRule : this.acceptLaw,
      memberType : this.memberType
    };
    this.auth.regsiterUser(regObject);
  }

  onItemChange(item) {
    console.log(item)
    this.memberType = item;
  }

  setMemberType() {
    let _memberType = this.memberType;
    return _memberType;
  }

}
