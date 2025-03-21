import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // provideClientHydration(),
    provideHttpClient(withFetch()),
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
