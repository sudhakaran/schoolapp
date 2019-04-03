import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private _router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public login(userDetails): Observable<object> {

    const loginUSerDetails = {
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
      'userName': userDetails.username // 'ANAND'
    };
    console.log(loginUSerDetails);

    return this.http.post(`http://148.72.211.55:8080/schoolapp/auth/login`, loginUSerDetails)
      .pipe(
        map(userToken => {
          if (userToken) {
            console.log(userToken);
            localStorage.setItem('currentUserToken', JSON.stringify(userToken));
            this.currentUserSubject.next(userToken);
          }
          return userToken;
        }),
        catchError(this.handleError)
      );
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json() || 'An error occurred while communicating with the API');
  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

}
