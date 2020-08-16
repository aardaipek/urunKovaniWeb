import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      optionStore: '',
      optionSME: '',
      inputPassword: "",
      inputEmail:'',
      inputLastname:'',
      inputName:'',
      acceptLaw:false
    });
   }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log(data)
  }

}
