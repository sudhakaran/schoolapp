import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { MaterialModule } from 'src/app/themes/material.module';

import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { AllAdmissionComponent } from './all-admission/all-admission.component';
import { AddAdmissionComponent } from './add-admission/add-admission.component';
import { EditAdmissionComponent } from './edit-admission/edit-admission.component';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';
import { DeleteAdmissionComponent } from './delete-admission/delete-admission.component';

@NgModule({
  declarations: [AdmissionComponent,
    AllAdmissionComponent,
    AddAdmissionComponent,
    EditAdmissionComponent,
    ViewAdmissionComponent,
    DeleteAdmissionComponent],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
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
  providers: [ConfirmationService]
})
export class AdmissionModule { }
