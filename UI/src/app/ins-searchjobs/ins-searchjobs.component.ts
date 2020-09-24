import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { GlobalService } from "../services/global.service";

@Component({
  selector: "ins-searchjobs",
  templateUrl: "./ins-searchjobs.component.html",
  styleUrls: ["./ins-searchjobs.component.scss"],
})
export class InsSearchjobsComponent implements OnInit {
  jobSearchForm: FormGroup;
  countriesList: any;
  flagUrl: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _globalService: GlobalService
  ) {}

  ngOnInit() {
    this.jobSearchForm = this._formBuilder.group({
      course: [""],
      specialization: [""],
      experience: [""],
      functionalArea: [""],
      location: [""],
      others: [""],
      specify: [""],
    });

    this._globalService.getCountriesList().subscribe((country) => {
      if (country) {
        this.countriesList = country;
      }
    });
  }

  setflag(event: any)
  {
    console.log('Flag url is:', this.jobSearchForm.get('location').value);
    this.flagUrl = this.jobSearchForm.get('location').value;
  }

  onsSearch() {}
}
