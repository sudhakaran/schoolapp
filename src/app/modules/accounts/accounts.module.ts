import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { FeeCollectionComponent } from './fee-collection/fee-collection.component';
import { ExpenseComponent } from './expense/expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { FeeRegulationComponent } from './fee-regulation/fee-regulation.component';
import { StudentsFeeRegulationComponent } from './students-fee-regulation/students-fee-regulation.component';

@NgModule({
  declarations: [AccountsComponent, FeeCollectionComponent, ExpenseComponent, AddExpenseComponent, FeeRegulationComponent, StudentsFeeRegulationComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
