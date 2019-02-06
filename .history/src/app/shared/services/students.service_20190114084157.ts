import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from 'http';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  public headers: Headers;
  public options: RequestOptions;

  constructor(private _http: HttpClient) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public listStudents(): Promise<any>  {
    // return this._http.get('./assets/mockdata/students.json').subscribe();
    // return this._http.get('https://2e4b636a.ngrok.io/schoolapp/students/list?acedamicyear=2017-2018&institute=string').toPromise();
    const url = 'https://2e4b636a.ngrok.io/schoolapp/students/list?acedamicyear=2017-2018&institute=string';
    return this._http.get(url, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public addStudent(student) {
    console.log(student);
    this._http.post(`https://2e4b636a.ngrok.io/schoolapp/students/addstudent`, student).subscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
