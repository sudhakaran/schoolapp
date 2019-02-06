import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { StudentsManualEntryComponent } from './students-manual-entry/students-manual-entry.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StaffManualEntryComponent } from './staff-manual-entry/staff-manual-entry.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';

@NgModule({
  declarations: [AttendanceComponent, StudentsManualEntryComponent, StudentsAttendanceComponent, StaffManualEntryComponent, StaffAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
