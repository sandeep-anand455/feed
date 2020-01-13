import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {


  constructor(private http: HttpClient) { }
  public getAllGenders(){
    return this.http.get('api/gender/All')
  }
}
