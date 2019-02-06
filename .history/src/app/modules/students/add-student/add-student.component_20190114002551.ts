import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  public addStudentForm: FormGroup;

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

  public calcAge(event) {
        const timeDiff = Math.abs(Date.now() - event.value);
        const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        this.addStudentForm.controls['age'].setValue(age);
  }

  ngOnInit() {
    this.addStudentForm = this._formBuilder.group({
      aadharNumber: [],
      admissionDate: [],
      admissionStatus: [],
      acedamicyear: [],
      admittedIntoStandard: [],
      age: [],
      attendanceId: [],
      birthCertificate: [],
      bloodGroup: [],
      caste: [],
      classLastAttended: [],
      community: [],
      communityCertificate: [],
      createdBy: [],
      createdOn: [],
      dateOfBirth: [],
      emisNo: [],
      examNo: [],
      fatherName: [],
      fatherPhoto: [],
      fathersIncome: [],
      fathersMobile: [],
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
      mothersMobile: [],
      mothersQualificaiton: [],
      nameOfTheGuardian: [],
      nameOfTheMother: [],
      nationality: [],
      occupationalAddress: [],
      password: [],
      place: [],
      preferredContactNoForSms: [],
      preferredContactNoForSms2: [],
      preferredMailId: [],
      prevoiusSchoolAcademicBoard: [],
      prevoiusSchoolAttended: [],
      regNo: [],
      religion: [],
      residentalStatus: [],
      residentialAddressOfFatherGuardian: [],
      rfId: [],
      secondLanguage: [],
      section: [],
      sex: [],
      siblings1: [],
      siblings2: [],
      status: [],
      studentName: [],
      studentPhoto: [],
      thirdLanguage: [],
      userName: [],
      whetherMarksStatementIsAttached: [],
      whetherTransferCertificateIsAttached: []
    });
  }

}
