import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../shared/services/students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  students: any[];

  cols: any[];

  dob: any[];

  doa: any[];

  brands: any[];

  ageFilter: number;
  ageTimeout: any;

  constructor(private _studentService: StudentsService) { }

  ngOnInit() {


    this.getStudentsList();

    this.doa = [
      { label: '06-01-2019', value: '06-01-2019' },
      { label: '07-01-2012', value: '07-01-2012' },
      { label: '08-01-2014', value: '08-01-2014' },
      { label: '09-01-2017', value: '09-01-2017' }
    ];

    this.dob = [
      { label: 'All Dates', value: '' },
      { label: '09-09-2018', value: '09-09-2018' },
      { label: '08-01-2019', value: '08-01-2019' },
      { label: '06-03-2018', value: '06-03-2018' },
      { label: '06-01-2017', value: '06-01-2017' }
    ];

    this.cols = [
      { field: 'studentId', header: 'ID' },
      { field: 'studentName', header: 'Name' },
      { field: 'age', header: 'Age' },
      { field: 'dateOfBirth', header: 'D-O-B' },
      { field: 'fatherName', header: 'Father' },
      { field: 'fathersMobile', header: 'Contact' },
      { field: 'regNo', header: 'Reg No' },
      { field: 'aadharNumber', header: 'Aadhar' },
      { field: 'admissionDate', header: 'Admission' },
    ];

  }

  onAgeChange(event, dt) {
    if (this.ageTimeout) {
      clearTimeout(this.ageTimeout);
    }

    this.ageTimeout = setTimeout(() => {
      dt.filter(event.value, 'age', 'gt');
    }, 250);
  }



  public getStudentsList() {
    this._studentService.listStudents().then(response => this.students = response)
  }

}

