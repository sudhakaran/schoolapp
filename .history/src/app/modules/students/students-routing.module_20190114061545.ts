import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      { path: '', redirectTo: 'all-students', pathMatch: 'prefix' },
      { path: 'all-students', component: AllStudentsComponent },
      { path: 'add-student', component: AddStudentComponent },
      { path: 'promotion', component: PromotionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
