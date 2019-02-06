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

  public studentsListForPromotion: any = [];
  public cols: any[];
  public msgs: any = [];

  public fromStandardList = [
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

  public fromSectionList = [
    {value: 'A', viewValue: 'A'},
    {value: 'B', viewValue: 'B'},
    {value: 'C', viewValue: 'C'},
    {value: 'D', viewValue: 'D'},
    {value: 'E', viewValue: 'E'}
  ];

  public toStandardList = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
    {label: '11', value: '11'},
    {label: '12', value: '12'}
  ];

  public toSectionList = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
    {label: 'E', value: 'E'}
  ];

  public fromStandardListEdit = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '10', value: '10'},
    {label: '11', value: '11'},
    {label: '12', value: '12'}
  ];

  public searchStudentPromotionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _studentService: StudentsService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.searchStudentPromotionForm = this._formBuilder.group({
      fromStandard: ['', [Validators.required]],
      fromSection: ['', [Validators.required]]
    });
  }

  public getStudentsPromotionList(searchStudent) {
    if (!this.searchStudentPromotionForm.invalid) {
      this._studentService.studentsPromotionList(searchStudent).then(response => this.studentsListForPromotion = response);
      this.cols = [
        { field: 'studentId', header: 'ID' },
        { field: 'studentName', header: 'Name' },
        { field: 'fromStandard', header: 'From Standard' },
        { field: 'fromSection', header: 'From Section' }
      ];
    }
  }

  public savePromotionsList(promotedStudentsList) {
    console.log(promotedStudentsList);
  }

  public clearSearchResults() {
    this.studentsListForPromotion = [];
    this.searchStudentPromotionForm.reset();
  }

}
