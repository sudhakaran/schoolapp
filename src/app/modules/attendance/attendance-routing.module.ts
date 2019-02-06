import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { StudentsManualEntryComponent } from './students-manual-entry/students-manual-entry.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StaffManualEntryComponent } from './staff-manual-entry/staff-manual-entry.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';

const routes: Routes = [
  { 
    path: '', 
    component: AttendanceComponent,
    children: [
      { path: '', redirectTo: 'students-manual-entry', pathMatch: 'prefix' },
      { path: 'students-manual-entry', component: StudentsManualEntryComponent },
      { path: 'students-attendance', component: StudentsAttendanceComponent },
      { path: 'staff-manual-entry', component: StaffManualEntryComponent },
      { path: 'staff-attendance', component: StaffAttendanceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
