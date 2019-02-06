import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor(private _http: HttpClient) { }

  public listStudents(): Promise<any> {
    const url = `./assets/mockdata/students.json`;
    return this._http.get(url).toPromise();
  }

  public addStudent(student): Promise<any> {
    const url = `https://2e4b636a.ngrok.io/schoolapp/students/addstudent`;
    return this._http.post(url, student).toPromise();
  }

  public editStudent(student): Promise<any> {
    const url = `https://2e4b636a.ngrok.io/schoolapp/students/updatestudent`;
    return this._http.post(url, student).toPromise();
  }

  public studentsPromotionList(): Promise<any> {
    const url = `./assets/mockdata/promotionsList.json`;
    return this._http.get(url).toPromise();
  }

}
