import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}
  _url = 'https://jsonplaceholder.typicode.com/posts';

  register(user: any) {
    return this.http.post(this._url, user);
  }
}
