import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  private _headers: Headers;
  private _baseOpeningUrl: string;

  constructor(private _http: HttpClient) { }

  public addStudent(student): Promise<any> {
    const url = `https://2e4b636a.ngrok.io/schoolapp/students/addstudent`;
    const options = this.getRequestOption();
    return this._http.post(url, student, options)
      .pipe(map(this.extractData)).toPromise()
      .catch(this.handlePromiseError);
  }

  public listStudents(): Promise<any> {
    const url = `./assets/mockdata/students.json`;
    const options = this.getRequestOption();
    return this._http.post(url, options)
      .pipe(map(this.extractData)).toPromise()
      .catch(this.handlePromiseError);
  }

  public editStudent(student): Promise<any> {
    const url = `https://2e4b636a.ngrok.io/schoolapp/students/updatestudent`;
    const options = this.getRequestOption();
    return this._http.post(url, student, options)
      .pipe(map(this.extractData)).toPromise()
      .catch(this.handlePromiseError);
  }

  private handlePromiseError(error: Response) {
    throw (error.json().error || 'An error occurred while communicating with the API');
  }

  private extractData(resp: Response) {
    const body = resp.json();
    return body || {};
  }

  private getRequestOption(): RequestOptions {
    const _headers = new Headers({
      'Content-Type': 'application/json;charset=UTF-8',
    });
    const options = new RequestOptions({
      headers: _headers
    });
    return options;
  }
}
