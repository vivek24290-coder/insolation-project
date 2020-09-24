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
        console.log("COuntries List are: ", country);
        this.countriesList = country;
      }
    });
  }

  onsSearch() {}
}
