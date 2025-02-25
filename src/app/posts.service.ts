import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPost } from '../post';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private router: Router) {}
  private _url: string = 'https://jsonplaceholder.typicode.com/posts';
  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  getPostById(id: string | null): Observable<IPost> {
    return this.http
      .get<IPost>(this._url + '/' + id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error');
  }
  selectPost(id: string | null) {
    this.router.navigate(['/posts', id]);
  }
}
