import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public employess = [
    { id: 1, name: 'abc', age: '20' },
    { id: 2, name: 'def', age: '21' },
    { id: 3, name: 'geh', age: '22' },
  ];
  constructor(private http: HttpClient) {}
  private _url: string = 'https://jsonplaceholder.typicode.com/user';

  getEmployess(): Observable<IEmployee[]> {
    // return this.employess;
    // return this.http.get<IEmployee[]>(this._url).catch(this.errorHandler);
    return this.http
      .get<IEmployee[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  addEmployee(data: any) {
    this.employess.push(data);
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
}
