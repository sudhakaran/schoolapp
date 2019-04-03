import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
      { path: 'admission-form', loadChildren: '../admission/admission.module#AdmissionModule' },
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
      { path: 'teachers', loadChildren: '../teachers/teachers.module#TeachersModule' },
      { path: 'students', loadChildren: '../students/students.module#StudentsModule' },
      { path: 'parents', loadChildren: '../parents/parents.module#ParentsModule' },
      { path: 'attendance', loadChildren: '../attendance/attendance.module#AttendanceModule' },
      { path: 'accounts', loadChildren: '../accounts/accounts.module#AccountsModule' }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
