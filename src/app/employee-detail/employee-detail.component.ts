import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-detail',
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss',
})
export class EmployeeDetailComponent {
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
}
