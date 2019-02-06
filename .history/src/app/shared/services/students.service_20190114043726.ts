import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListStudents } from '../interface/istudents';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private _http: HttpClient) { }

  public listStudents(): Promise<any> {
    return this._http.get('./assets/mockdata/students.json').toPromise();
  }

  public listCars(): Promise<any> {
    return this._http.get('./assets/mockdata/cars.json').toPromise();
  }

  public addStudent(student) {
    console.log(student);
    this._http.post(`http://c05b1cbd.ngrok.io/schoolapp/students/addstudent`, student).subscribe();
  }

  private _handleError(error: Response) {
    // return Observable.throw(error.json().error || 'An Error occured while communicating with the API');
  }
}
