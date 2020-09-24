import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GlobalService {
  constructor(private http: HttpClient) {}

  getCountriesList() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
