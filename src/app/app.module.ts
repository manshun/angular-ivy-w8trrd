import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { EmployeesComponent } from './employees/employees.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WorkSpaceComponent,
    EmployeesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
