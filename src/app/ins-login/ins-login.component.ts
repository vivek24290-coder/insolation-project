import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  FormControl } from '@angular/forms';

@Component({
  selector: 'ins-login',
  templateUrl: './ins-login.component.html',
  styleUrls: ['./ins-login.component.scss'],
})
export class InsLoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      emailAddress:[''],
      password:['']
    })
  }

  onLogin()
  {
    // Call the Login Api
  }

}
