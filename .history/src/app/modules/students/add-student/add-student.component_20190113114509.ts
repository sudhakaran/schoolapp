import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  public acedamic_year = [
    {value: '2015-2016', viewValue: '2015-2016'},
    {value: '2016-2017', viewValue: '2016-2017'},
    {value: '2018-2019', viewValue: '2018-2019'}
  ];

  public institute = [
    {value: 'Alagappa-University', viewValue: 'Alagappa University'},
    {value: 'Anna-University', viewValue: 'Anna University'},
    {value: 'Annamala-University', viewValue: 'Annamalai University'}
  ];

  public admitted_into_standard = [
    {value: '1', viewValue: '1st'},
    {value: '2', viewValue: '2nd'},
    {value: '3', viewValue: '3rd'},
    {value: '4', viewValue: '4th'},
    {value: '5', viewValue: '5th'},
    {value: '6', viewValue: '6th'},
    {value: '7', viewValue: '7th'},
    {value: '8', viewValue: '8th'},
    {value: '9', viewValue: '9th'},
    {value: '10', viewValue: '10th'},
    {value: '11', viewValue: '11th'},
    {value: '12', viewValue: '12th'},
  ];

  ngOnInit() {
  }

}
