import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AllDashboardComponent } from './all-dashboard/all-dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      //{ path: '', redirectTo: 'all-dashboard', pathMatch: 'prefix' },
      { path: '', component: AllDashboardComponent },
      { path: 'all-dashboard', component: AllDashboardComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
