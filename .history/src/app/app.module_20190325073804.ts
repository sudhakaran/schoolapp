import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    { provide: 'BASE_APP_API_URL', useFactory: getAppAPIUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getAppAPIUrl() {
    const appAPIUrl = 'http://148.72.211.55:8080/schoolapp';
    return appAPIUrl;
}
