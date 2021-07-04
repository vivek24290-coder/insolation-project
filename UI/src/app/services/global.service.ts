import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class GlobalService {
  constructor(private http: HttpClient) {}

  getCountriesList() {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }

  saveUsers(data: any) {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .post("http://localhost:5000/api/insolation", data);
  }

  getAllUsers() {
    return this.http.get("http://localhost:5000/api/insolation");
  }
}
