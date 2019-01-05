import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { BootstrapModule } from '../../themes/bootstrap.module';
import { MaterialModule } from '../../themes/material.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CollapseModule } from '../../core/collapse/collapse.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BootstrapModule,
    MaterialModule,
    CollapseModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }
