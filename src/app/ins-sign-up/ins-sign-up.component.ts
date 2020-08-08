import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  FormControl } from '@angular/forms';

@Component({
  selector: 'app-ins-sign-up',
  templateUrl: './ins-sign-up.component.html',
  styleUrls: ['./ins-sign-up.component.scss'],
})
export class InsSignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      name:[''],
      emailAddress:[''],
      password: [''],
      confirmPassword: [''],
      mobileNumber: [''],
      course: [''],
      specialization: [''],
      experience: ['']
    })
  }

  onSignUp() {
    
  }

}
