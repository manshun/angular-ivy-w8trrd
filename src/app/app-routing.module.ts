import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { WorkSpaceComponent } from './work-space/work-space.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'fruits', component: WorkSpaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
