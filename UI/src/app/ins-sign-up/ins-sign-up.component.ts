import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  FormControl } from '@angular/forms';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'ins-sign-up',
  templateUrl: './ins-sign-up.component.html',
  styleUrls: ['./ins-sign-up.component.scss'],
})
export class InsSignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _globalService: GlobalService) { }

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

     const data : any = {
       'Name': this.signUpForm.get('name').value,
       'EmailAddress': this.signUpForm.get('emailAddress').value,
       'Password': this.signUpForm.get('password').value,
       'MobileNumber': this.signUpForm.get('mobileNumber').value,
       'Course': this.signUpForm.get('course').value,
       'Specialization': this.signUpForm.get('specialization').value,
       'Experience': +this.signUpForm.get('experience').value
     }
     console.log('Data to be posted is :', data);
     this._globalService.saveUsers(data).subscribe(x => {
       if (x){
         console.log(x);
       }
     });

    //  var users = this._globalService.getAllUsers()
    //                   .subscribe(x => {
    //                     if (x)
    //                     {
    //                       console.log('Úsers are: ', x);
    //                     }
    //                   })
  }

}
