import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  FormControl } from '@angular/forms';

@Component({
  selector: 'ins-searchjobs',
  templateUrl: './ins-searchjobs.component.html',
  styleUrls: ['./ins-searchjobs.component.scss'],
})
export class InsSearchjobsComponent implements OnInit {

  jobSearchForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.jobSearchForm = this._formBuilder.group({
      course:[''],      
      specialization: [''],
      experience:[''],
      functionalArea: [''],
      location: [''],
      others: [''],
      specify: ['']
    })
  }

  onsSearch () {
    
  }

}
