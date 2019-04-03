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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../shared/services/token.interceptor';
import { ErrorInterceptor } from '../../shared/services/error.interceptor';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BootstrapModule,
    MaterialModule,
    CollapseModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class LayoutModule { }
