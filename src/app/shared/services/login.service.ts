import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private _baseApiUrl: string;

  constructor(private http: HttpClient, private _router: Router, @Inject('BASE_APP_API_URL') baseApiUrl: string) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUserToken')));
    this.currentUser = this.currentUserSubject.asObservable();
    this._baseApiUrl = baseApiUrl;
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public login(userDetails: any): Observable<any> {

    const RequestModel = {
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
    const url = `${this._baseApiUrl}/auth/login`;
    const options = this._getRequestOption();

    return this.http.post(url, RequestModel, options)
      .pipe(
        map(userToken => {
          localStorage.setItem('currentUserToken', JSON.stringify(userToken['JWT_TOKEN']));
          this.currentUserSubject.next(userToken);
          return userToken;
        }),
        catchError(this._handleError)
      );
  }

  public logout() {
    localStorage.removeItem('currentUserToken');
    this.currentUserSubject.next(null);
    this._router.navigate(['/login']);
  }

  private _handleError(error: HttpErrorResponse) {
    return throwError(error.error || 'An error occurred while communicating with the API');
  }

  private _getRequestOption() {
    const reqHeader = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const options = {
      headers: reqHeader
    };
    return options;
  }

}
