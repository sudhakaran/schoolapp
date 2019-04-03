import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LayoutModule } from '../layout/layout.module';
import { BootstrapModule } from 'src/app/themes/bootstrap.module';
import { MaterialModule } from 'src/app/themes/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BootstrapModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ToastModule
  ]
})
export class LoginModule { }
