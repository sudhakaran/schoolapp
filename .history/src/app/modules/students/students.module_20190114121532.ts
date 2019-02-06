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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';


@NgModule({
  declarations: [StudentsComponent,
    AllStudentsComponent,
    AddStudentComponent,
    PromotionComponent,
    EditStudentComponent,
    ViewStudentComponent],
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
    MaterialFileInputModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [ConfirmationService],
  entryComponents: [AddStudentComponent, EditStudentComponent, ViewStudentComponent]
})
export class StudentsModule { }
