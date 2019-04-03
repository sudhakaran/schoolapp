import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { console.log('Login Service Working'); }

  private _login(userDetails) {
    this._http.post('http://148.72.211.55:8080/schoolapp/auth/login', userDetails);
  }
}
