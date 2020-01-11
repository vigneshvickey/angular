import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';

import { User } from './user';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()

export class DatauserService {
  heroesUrl = 'api/heroes'; 
  private handleError: HandleError;
  constructor(
    private http: HttpClient, HttpErrorHandlerService: HttpErrorHandlerService) {
    this.handleError = HttpErrorHandlerService.createHandleError('DatauserService');
  }
    /** GET heroes from the server */
  getHeroes (): Observable<User[]> {
    return this.http.get<User[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<User[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<User[]>(this.heroesUrl, options)
      .pipe(
        catchError(this.handleError<User[]>('searchHeroes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addHero (user: User): Observable<User> {
    return this.http.post<User>(this.heroesUrl, user, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', user))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (id: number): Observable<{}> {
    const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateHero (user: User): Observable<User> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<User>(this.heroesUrl, user, httpOptions)
      .pipe(
        catchError(this.handleError('updateHero', user))
      );
  }
}
