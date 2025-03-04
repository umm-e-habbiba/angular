import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root',
})
export class SubmitFormService {
  _url = 'https://jsonplaceholder.typicode.com/postss';

  constructor(private _http: HttpClient) {}
  submit(user: User) {
    return this._http.post(this._url, user);
  }
}
