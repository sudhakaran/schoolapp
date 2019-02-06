import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/shared/services/students.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AllStudentsComponent } from '../all-students/all-students.component';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private _studentService: StudentsService,
    public dialogRef: MatDialogRef<AllStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) { }

  public editStudentForm: FormGroup;

  public acedamic_year = [
    {value: '2015-2016', viewValue: '2015-2016'},
    {value: '2016-2017', viewValue: '2016-2017'},
    {value: '2018-2019', viewValue: '2018-2019'}
  ];

  public institute = [
    {value: 'PAR School', viewValue: 'PAR School'},
    {value: 'PAR School', viewValue: 'PAR School'},
    {value: 'PAR School', viewValue: 'PAR School'}
  ];

  public admitted_into_standard = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
    {value: '11', viewValue: '11'},
    {value: '12', viewValue: '12'}
  ];

  public admitted_into_section = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'},
    {value: 'E', viewValue: 'E'}
  ];

  public dobstartDate = new Date(1995, 0, 1);
  public passwordHide = true;

  public calcAge(event) {
        const timeDiff = Math.abs(Date.now() - event.value);
        const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        this.editStudentForm.controls['age'].setValue(age);
  }

  ngOnInit() {
    this.editStudentForm = this._formBuilder.group({
      aadharNumber: [this.data.aadharNumber],
      admissionDate: [this.data.admissionDate, [Validators.required]],
      admissionStatus: [],
      acedamicyear: [],
      admittedIntoStandard: ['', [Validators.required]],
      age: [this.data.age],
      attendanceId: [],
      birthCertificate: ['', [Validators.required]],
      bloodGroup: [],
      caste: [],
      classLastAttended: [],
      community: [],
      communityCertificate: [],
      createdBy: [],
      createdOn: [],
      dateOfBirth: ['', [Validators.required]],
      emisNo: [],
      examNo: [],
      fatherName: [this.data.fatherName, [Validators.required]],
      fatherPhoto: [],
      fathersIncome: [],
      fathersMobile: [this.data.fathersMobile, [Validators.required]],
      fathersQualificaiton: [],
      firstLanguage: [],
      guardianPhoto: [],
      guardianMobile: [],
      identificationMark1: [],
      identificationMark2: [],
      institute: [],
      modifiedBy: [],
      modifiedOn: [],
      motherPhoto: [],
      motherTongue: [],
      mothersIncome: [],
      mothersMobile: ['', [Validators.required]],
      mothersQualificaiton: [],
      nameOfTheGuardian: [],
      nameOfTheMother: ['', [Validators.required]],
      nationality: [],
      occupationalAddress: [],
      password: [],
      place: [],
      preferredContactNoForSms: [],
      preferredContactNoForSms2: [],
      preferredMailId: [],
      prevoiusSchoolAcademicBoard: [],
      prevoiusSchoolAttended: [],
      regNo: [this.data.regNo, [Validators.required]],
      religion: [],
      residentalStatus: [],
      residentialAddressOfFatherGuardian: [],
      rfId: [],
      secondLanguage: [],
      section: [],
      sex: ['', [Validators.required]],
      siblings1: [],
      siblings2: [],
      status: [],
      studentName: [this.data.studentName, [Validators.required]],
      studentPhoto: [],
      thirdLanguage: [],
      userName: ['', [Validators.required]],
      whetherMarksStatementIsAttached: [],
      whetherTransferCertificateIsAttached: []
    });
  }

  public addStudent() {
    this._studentService.addStudent(this.editStudentForm.value);
  }

}
