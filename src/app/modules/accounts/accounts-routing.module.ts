import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { FeeCollectionComponent } from './fee-collection/fee-collection.component';
import { ExpenseComponent } from './expense/expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { FeeRegulationComponent } from './fee-regulation/fee-regulation.component';
import { StudentsFeeRegulationComponent } from './students-fee-regulation/students-fee-regulation.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      { path: '', component: FeeCollectionComponent },
      { path: 'fee-collection', component: FeeCollectionComponent },
      { path: 'expense', component: ExpenseComponent },
      { path: 'add-expense', component: AddExpenseComponent },
      { path: 'fee-regulation', component: FeeRegulationComponent },
      { path: 'student-fee-regulation', component: StudentsFeeRegulationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
