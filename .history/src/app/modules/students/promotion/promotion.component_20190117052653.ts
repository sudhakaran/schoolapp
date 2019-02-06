import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../shared/services/students.service';
import { ConfirmationService } from 'primeng/api';

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
    private confirmationService: ConfirmationService) { }

  ngOnInit() {

    this.getStudentsPromotionList();

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

  public getStudentsPromotionList() {
    return this._studentService.listStudents().then(response => this.students = response);
  }


}
