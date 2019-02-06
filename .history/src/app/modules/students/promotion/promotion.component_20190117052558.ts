import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../shared/services/students.service';
import { ConfirmationService } from 'primeng/api';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditStudentComponent } from '../edit-student/edit-student.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { ViewStudentComponent } from '../view-student/view-student.component';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  public students: any;
  public cols: any[];
  public dob: any[];
  public doa: any[];
  public ageFilter: number;
  public ageTimeout: any;

  public msgs: any = [];

  constructor(private _studentService: StudentsService,
    private confirmationService: ConfirmationService,
    public dialog: MatDialog) { }

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
      { field: 'fromStandard', header: 'From Standard' },
      { field: 'fromSection', header: 'From Section' },
      { field: 'toStandard', header: 'To Standard' },
      { field: 'toSection', header: 'To Section' },
      { field: 'status', header: 'Status' }
    ];

  }

  public getStudentsList() {
    return this._studentService.listStudents().then(response => this.students = response);
  }


}
