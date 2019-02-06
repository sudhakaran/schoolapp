import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from '../../core/collapse/collapse.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { BootstrapModule } from '../../themes/bootstrap.module';
import { MaterialModule } from '../../themes/material.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, FooterComponent],
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
