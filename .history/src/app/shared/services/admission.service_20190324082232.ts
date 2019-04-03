import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  private _baseApiUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_APP_API_URL') baseApiUrl: string) {
    this._baseApiUrl = baseApiUrl;
  }

  // Get admission Detail by Application Number (for search, view, update)
  public getAdmissionByAppNo(applicationNo: any): Observable<any> {
    const url = `${this._baseApiUrl}/studentsmanagement/getadmisisonbyappno?applicationNo=${applicationNo}`;
    const options = this._getRequestOption();
    return this.http.get(url, options)
      .pipe(
        map(data => data),
        catchError(this._handleError)
      );
  }

  // Get admission Details by Acedamic Year and Standard (for search)
  public getAdmissionByYearStd(yearStd: any): Observable<any> {
    const url = `${this._baseApiUrl}/studentsmanagement/getadmissionbyyearstd`;
    const options = this._getRequestOption();
    return this.http.get(url, options)
      .pipe(
        map(data => data),
        catchError(this._handleError)
      );
  }

  // Add admission Details
  public addStudentAdmission(addAdmissionModel: any): Observable<any> {
    const url = `${this._baseApiUrl}/studentsmanagement/addstudentadmission`;
    const options = this._getRequestOption();
    return this.http.post(url, addAdmissionModel, options)
      .pipe(
        map(data => data),
        catchError(this._handleError)
      );
  }

  // Update admission Details
  public updateStudentAdmission(updateAdmissionModel: any): Observable<any> {
    const url = `${this._baseApiUrl}/studentsmanagement/updatestudentadmission`;
    const options = this._getRequestOption();
    return this.http.post(url, updateAdmissionModel, options)
      .pipe(
        map(data => data),
        catchError(this._handleError)
      );
  }

  private _handleError(error: HttpErrorResponse) {
    return throwError(error.error || 'An error occurred while communicating with the API');
  }

  private _getRequestOption() {
    const reqHeader = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUserToken')),
      'Content-Type': 'application/json'
    });
    const options = {
      headers: reqHeader
    };
    return options;
  }

}
