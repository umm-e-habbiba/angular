import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public employess = [
    { id: 1, name: 'abc', age: '20' },
    { id: 2, name: 'def', age: '21' },
    { id: 3, name: 'geh', age: '22' },
  ];
  constructor() {}

  getEmployess() {
    return this.employess;
  }

  addEmployee(data: any) {
    this.employess.push(data);
  }
}
