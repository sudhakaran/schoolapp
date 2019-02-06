import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../../shared/services/students.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  public studentsListForPromotion: any;
  public cols: any[];
  public msgs: any = [];

  public standardList = [
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

  public sectionList = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'},
    {value: 'E', viewValue: 'E'}
  ];

  public searchStudentPromotion: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _studentService: StudentsService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.searchStudentPromotion = this._formBuilder.group({
      standard: ['', [Validators.required]],
      section: ['', [Validators.required]]
    });
  }

  public getStudentsPromotionList() {
    this._studentService.listStudents().then(response => this.studentsListForPromotion = response);
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

}
