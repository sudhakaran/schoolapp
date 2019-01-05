import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';

const routes: Routes = [
  { 
    path: '', 
    component: TeachersComponent,
    children: [
      { path: '', redirectTo: 'all-teachers', pathMatch: 'prefix' },
      { path: 'all-teachers', component: AllTeachersComponent },
      { path: 'add-teacher', component: AddTeacherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
