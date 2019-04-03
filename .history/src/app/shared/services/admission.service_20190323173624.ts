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


  // Add admission Details
  public addStudentAdmission(addAdmissionModel: addAdmissionRequestModel): Observable<any> {
    const url = `${this._baseApiUrl}/studentsmanagement/addstudentadmission`;
    const options = this._getRequestOption();
    return this.http.post(url, addAdmissionModel, options)
      .pipe(
        map(data => data),
        catchError(this._handleError)
      );
  }

    // Update admission Details
    public updateStudentAdmission(updateAdmissionModel: updateAdmissionRequestModel): Observable<any> {
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
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': auth_token
    });
    const options = {
      headers: reqHeader
    };
    return options;
  }

}
