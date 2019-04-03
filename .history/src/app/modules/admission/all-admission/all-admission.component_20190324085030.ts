import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '../../../shared/services/admission.service';
import { ConfirmationService } from 'primeng/api';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditAdmissionComponent } from '../edit-admission/edit-admission.component';
import { AddAdmissionComponent } from '../add-admission/add-admission.component';
import { ViewAdmissionComponent } from '../view-admission/view-admission.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  public acedamic_year = [
    { value: '2015-2016', viewValue: '2015-2016' },
    { value: '2016-2017', viewValue: '2016-2017' },
    { value: '2018-2019', viewValue: '2018-2019' }
  ];

  public standardList = [
    { value: '1st', viewValue: '1st' },
    { value: '2nd', viewValue: '2nd' },
    { value: '3rd', viewValue: '3rd' },
    { value: '4th', viewValue: '4th' },
    { value: '5th', viewValue: '5th' },
    { value: '6th', viewValue: '6th' },
    { value: '7th', viewValue: '7th' },
    { value: '8th', viewValue: '8th' },
    { value: '9th', viewValue: '9th' },
    { value: '10th', viewValue: '10th' },
    { value: '11th', viewValue: '11th' },
    { value: '12th', viewValue: '12th' }
  ];

  public searchAdmissionForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _admissionService: AdmissionService,
    private confirmationService: ConfirmationService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

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

    this.searchAdmissionForm = this._formBuilder.group({
      acedamicyear: ['', [Validators.required]],
      standard: ['', [Validators.required]],
      applicationNo: ['', [Validators.required]]
    });

  }

  onAgeChange(event, dt) {
    if (this.ageTimeout) {
      clearTimeout(this.ageTimeout);
    }

    this.ageTimeout = setTimeout(() => {
      dt.filter(event.value, 'age', 'gt');
    }, 250);
  }

  public getAdmissionByYearStd(admissionDetails) {
    if (this.searchAdmissionForm.valid) {
      return this._admissionService.getAdmissionByYearStd(admissionDetails)
        .subscribe(
          data => data,
          error => error
        );
    }

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
