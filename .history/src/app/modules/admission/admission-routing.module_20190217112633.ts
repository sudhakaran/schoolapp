import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { AllAdmissionComponent } from './all-admission/all-admission.component';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';
import { AddAdmissionComponent } from './add-admission/add-admission.component';
import { EditAdmissionComponent } from './edit-admission/edit-admission.component';
import { DeleteAdmissionComponent } from './delete-admission/delete-admission.component';

const routes: Routes = [
  {
    path: '',
    component: AdmissionComponent,
    children: [
      { path: '', redirectTo: 'all-admission', pathMatch: 'prefix' },
      { path: 'all', component: AllAdmissionComponent },
      { path: 'view', component: ViewAdmissionComponent },
      { path: 'add', component: AddAdmissionComponent },
      { path: 'edit', component: EditAdmissionComponent },
      { path: 'delete', component: DeleteAdmissionComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
