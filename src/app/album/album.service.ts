import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class AlbumService {
	albumURL = 'https://jsonplaceholder.typicode.com/photos';
  constructor( private http: HttpClient) { }
     getalbumdata (): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumURL);
  }

}
