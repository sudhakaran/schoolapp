import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { PromotionComponent } from './promotion/promotion.component';
import { MaterialModule } from 'src/app/themes/material.module';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [StudentsComponent, AllStudentsComponent, AddStudentComponent, PromotionComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    MaterialFileInputModule
  ]
})
export class StudentsModule { }
