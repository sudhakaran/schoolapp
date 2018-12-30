import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BootstrapModule } from '../../themes/bootstrap.module';
import { MaterialModule } from '../../themes/material.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BootstrapModule,
    MaterialModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }
