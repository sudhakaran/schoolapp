import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../shared/services/students.service';
import { ConfirmationService } from 'primeng/api';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditStudentComponent } from '../edit-student/edit-student.component';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit {

  public students: any[];
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
      { field: 'age', header: 'Age' },
      { field: 'dateOfBirth', header: 'D-O-B' },
      { field: 'fatherName', header: 'Father' },
      { field: 'fathersMobile', header: 'Contact' },
      { field: 'regNo', header: 'Reg No' },
      { field: 'aadharNumber', header: 'Aadhar' },
      { field: 'admissionDate', header: 'Admission' }
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
    this._studentService.listStudents().then(response => this.students = response);
  }

  public editStudent(student) {
    console.log(student);
    this.confirmationService.confirm({
      message: 'Do you want to edit this record?',
      header: 'Edit Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        // this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];

        const dialogRef = this.dialog.open(EditStudentComponent, {
          width: '90vw',
          height: '90vh',
          data: student
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          // this.animal = result;
        });

      },
      reject: () => {
        // this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

  public deleteStudent(student) {
    console.log(student);
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        // this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
      },
      reject: () => {
        // this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}

