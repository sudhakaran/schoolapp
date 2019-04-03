import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  public _login(userDetails) {
    const loginUSerDetaikls = {
      'createdBy': 0,
      'createdDate': '2019-02-17',
      'email': 'string',
      'firstname': 'string',
      'lastname': 'string',
      'mobile': 'string',
      'modifiedBy': 0,
      'modifiedDate': '2019-02-17',
      'password': userDetails.password, // '123456789',
      'role': 'ADMIN',
      'staffId': 0,
      'status': 'string',
      'userId': 0,
      'userName': userDetails.username, // 'ANAND'
    };
    this._http.post('http://148.72.211.55:8080/schoolapp/auth/login', userDetails);
  }
}
