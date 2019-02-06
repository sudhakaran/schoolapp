import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListStudents } from '../interface/istudents';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private _http: HttpClient) { }

  public listStudents() {
    // return this._http.get('./assets/mockdata/students.json')..subscribe();
    return this._http.get('https://2e4b636a.ngrok.io/schoolapp/students/list?acedamicyear=2017-2018&institute=string').toPromise();
  }

  public listCars() {
    return this._http.get('./assets/mockdata/cars.json').subscribe();
  }

  public addStudent(student) {
    console.log(student);
    this._http.post(`https://2e4b636a.ngrok.io/schoolapp/students/addstudent`, student).subscribe();
  }

  private _handleError(error: Response) {
    // return Observable.throw(error.json().error || 'An Error occured while communicating with the API');
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
