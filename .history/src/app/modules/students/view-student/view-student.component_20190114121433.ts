import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/shared/services/students.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AllStudentsComponent } from '../all-students/all-students.component';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  constructor(private _studentService: StudentsService,
    public dialogRef: MatDialogRef<AllStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  public closeModel(): void {
    this.dialogRef.close();
  }

}
