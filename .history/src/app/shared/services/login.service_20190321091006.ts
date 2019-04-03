import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // constructor(private _http: HttpClient) { }

  // public _login(userDetails): Observable<any> {
  //   const loginUSerDetaikls = {
  //     'createdBy': 0,
  //     'createdDate': '2019-02-17',
  //     'email': 'string',
  //     'firstname': 'string',
  //     'lastname': 'string',
  //     'mobile': 'string',
  //     'modifiedBy': 0,
  //     'modifiedDate': '2019-02-17',
  //     'password': userDetails.password, // '123456789',
  //     'role': 'ADMIN',
  //     'staffId': 0,
  //     'status': 'string',
  //     'userId': 0,
  //     'userName': userDetails.username, // 'ANAND'
  //   };
  //   return this._http.post('http://148.72.211.55:8080/schoolapp/auth/login', userDetails);
  // }

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

  login(userDetails) {

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
      return this.http.post<any>(`http://148.72.211.55:8080/schoolapp/auth/login`, loginUSerDetaikls)
          .pipe(map(userToken => {
              // login successful if there's a jwt token in the response
              if (userToken) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(userToken));
                  this.currentUserSubject.next(userToken);
              }

              return userToken;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

}
