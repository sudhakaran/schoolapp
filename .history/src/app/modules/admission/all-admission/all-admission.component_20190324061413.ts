import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '../../../shared/services/admission.service';
import { ConfirmationService } from 'primeng/api';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditAdmissionComponent } from '../edit-admission/edit-admission.component';
import { AddAdmissionComponent } from '../add-admission/add-admission.component';
import { ViewAdmissionComponent } from '../view-admission/view-admission.component';

@Component({
  selector: 'app-all-admission',
  templateUrl: './all-admission.component.html',
  styleUrls: ['./all-admission.component.scss']
})

export class AllAdmissionComponent implements OnInit {

  public students: any;
  public cols: any[];
  public dob: any[];
  public doa: any[];
  public ageFilter: number;
  public ageTimeout: any;

  public msgs: any = [];

  constructor(private _admissionService: AdmissionService,
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

  public getAdmissionsList() {
    return this._admissionService.listAdmissions().then(response => this.students = response);
  }

  public addStudent() {
    const dialogRef = this.dialog.open(AddAdmissionComponent, {
      width: '100vw',
      height: '90vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

  public editAdmission(admission) {
    console.log(admission);
    const dialogRef = this.dialog.open(EditAdmissionComponent, {
      width: '90vw',
      height: '90vh',
      data: admission
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public viewAdmission(admission) {
    console.log(admission);
    const dialogRef = this.dialog.open(ViewAdmissionComponent, {
      width: '70vw',
      height: '80vh',
      data: admission
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public deleteAdmission(admission) {
    console.log(admission);
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
