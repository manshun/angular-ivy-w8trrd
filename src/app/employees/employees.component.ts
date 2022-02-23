import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee, TEmployee } from './employee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public employees: Employee[];
  public employeeFormGroup: FormGroup;

  constructor(private employeesService: EmployeesService) {
    this.createEmployeeForm();
  }

  ngOnInit() {
    this.employees = this.employeesService.getAll();
  }

  createEmployeeForm() {
    this.employeeFormGroup = new FormGroup({
      empCode: new FormControl('', [Validators.required]),
      empName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      empDept: new FormControl('', [Validators.required]),
    });
  }

  addEmployee() {
    if (this.employeeFormGroup.invalid) return;

    const emp: TEmployee = this.employeeFormGroup.value;
    this.employeesService.add(emp);
    this.employees = this.employeesService.getAll();
    this.employeeFormGroup.reset();
  }
}
