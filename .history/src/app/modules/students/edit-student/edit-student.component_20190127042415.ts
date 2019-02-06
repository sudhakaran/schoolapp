import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/shared/services/students.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AllStudentsComponent } from '../all-students/all-students.component';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
    private _studentService: StudentsService,
    public dialogRef: MatDialogRef<AllStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private confirmationService: ConfirmationService
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
      admissionStatus: [this.data.admissionStatus],
      acedamicyear: [this.data.acedamicyear],
      admittedIntoStandard: [this.data.admittedIntoStandard, [Validators.required]],
      age: [this.data.age],
      attendanceId: [this.data.attendanceId],
      birthCertificate: [undefined, [Validators.required]],
      bloodGroup: [this.data.bloodGroup],
      caste: [this.data.caste],
      classLastAttended: [this.data.classLastAttended],
      community: [this.data.community],
      communityCertificate: [this.data.communityCertificate],
      createdBy: [this.data.createdBy],
      createdOn: [this.data.createdOn],
      dateOfBirth: [this.data.dateOfBirth, [Validators.required]],
      emisNo: [this.data.emisNo],
      examNo: [this.data.examNo],
      fatherName: [this.data.fatherName, [Validators.required]],
      fatherPhoto: [this.data.fatherPhoto],
      fathersIncome: [this.data.fatherPhoto],
      fathersMobile: [this.data.fathersMobile, [Validators.required]],
      fathersQualificaiton: [this.data.fathersMobile],
      firstLanguage: [this.data.firstLanguage],
      guardianPhoto: [this.data.guardianPhoto],
      guardianMobile: [this.data.guardianMobile],
      identificationMark1: [this.data.identificationMark1],
      identificationMark2: [this.data.identificationMark2],
      institute: [this.data.institute],
      modifiedBy: [this.data.modifiedBy],
      modifiedOn: [this.data.modifiedOn],
      motherPhoto: [this.data.motherPhoto],
      motherTongue: [this.data.motherTongue],
      mothersIncome: [this.data.mothersIncome],
      mothersMobile: [this.data.mothersMobile, [Validators.required]],
      mothersQualificaiton: [this.data.mothersQualificaiton],
      nameOfTheGuardian: [this.data.nameOfTheGuardian],
      nameOfTheMother: [this.data.nameOfTheMother, [Validators.required]],
      nationality: [this.data.nationality],
      occupationalAddress: [this.data.occupationalAddress],
      password: [this.data.password],
      place: [this.data.place],
      preferredContactNoForSms: [this.data.preferredContactNoForSms],
      preferredContactNoForSms2: [this.data.preferredContactNoForSms2],
      preferredMailId: [this.data.preferredMailId],
      prevoiusSchoolAcademicBoard: [this.data.prevoiusSchoolAcademicBoard],
      prevoiusSchoolAttended: [this.data.prevoiusSchoolAttended],
      regNo: [this.data.regNo, [Validators.required]],
      religion: [this.data.religion],
      residentalStatus: [this.data.residentalStatus],
      residentialAddressOfFatherGuardian: [this.data.residentialAddressOfFatherGuardian],
      rfId: [this.data.rfId],
      secondLanguage: [this.data.secondLanguage],
      section: [this.data.section],
      sex: [this.data.sex, [Validators.required]],
      siblings1: [this.data.siblings1],
      siblings2: [this.data.siblings2],
      status: [this.data.status],
      studentName: [this.data.studentName, [Validators.required]],
      studentPhoto: [this.data.studentPhoto],
      thirdLanguage: [this.data.thirdLanguage],
      userName: [this.data.userName, [Validators.required]],
      whetherMarksStatementIsAttached: [this.data.whetherMarksStatementIsAttached],
      whetherTransferCertificateIsAttached: [this.data.whetherTransferCertificateIsAttached]
    });
  }

  public editStudent() {
    if (!this.editStudentForm.invalid) {
      this.confirmationService.confirm({
        message: 'Are you sure to update this record?',
        header: 'Update Student Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          // this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
          this._studentService.editStudent(this.editStudentForm.value);
        },
        reject: () => {
          // this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
        }
      });
    }
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

}
