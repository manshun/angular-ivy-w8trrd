export type TEmployee = {
  empCode: number;
  empName: string;
  empDept: string;
};

export class Employee {
  empCode: number;
  empName: string;
  empDept: string;

  constructor(emp: TEmployee) {
    this.empCode = emp.empCode;
    this.empName = emp.empName;
    this.empDept = emp.empDept;
  }
}
