import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LayoutModule } from '../layout/layout.module';
import { BootstrapModule } from 'src/app/themes/bootstrap.module';
import { MaterialModule } from 'src/app/themes/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BootstrapModule,
    MaterialModule,
    LayoutModule
  ]
})
export class LoginModule { }
