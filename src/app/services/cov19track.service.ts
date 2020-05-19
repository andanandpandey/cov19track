import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Cov19trackService {

  constructor(private http:HttpClient) { }

  getCovid19India() {
    const newLocal = 'https://api.covid19india.org/data.json';
    return this.http.get(newLocal);
  }


}
