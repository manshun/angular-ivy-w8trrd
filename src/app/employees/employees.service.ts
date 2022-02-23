import { Injectable } from '@angular/core';
import { Employee, TEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private employees: Employee[];

  constructor() {
    this.employees = [];
  }

  add(emp: TEmployee): void {
    this.employees.push(new Employee(emp));
  }

  getAll(): Employee[] {
    return [...this.employees];
  }
}
