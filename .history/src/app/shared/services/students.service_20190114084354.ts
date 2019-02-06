import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private _http: HttpClient) { }

  public listStudents(): Promise<any>  {
    const url = 'https://2e4b636a.ngrok.io/schoolapp/students/list?acedamicyear=2017-2018&institute=string';
    return this._http.get(url).toPromise();
  }

  public addStudent(student) {
    console.log(student);
    this._http.post(`https://2e4b636a.ngrok.io/schoolapp/students/addstudent`, student).subscribe();
  }


}
