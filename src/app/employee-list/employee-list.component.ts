import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  // public employees = [
  //   { id: 1, name: 'abc', age: '20' },
  //   { id: 2, name: 'def', age: '21' },
  //   { id: 3, name: 'geh', age: '22' },
  // ];
  public employees: any[] = [];
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    this.employees = this._employeeService.getEmployess();
  }
  addEmployee(data: any) {
    this._employeeService.addEmployee(data);
  }
}
