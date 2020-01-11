import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Duser } from './duser';
import { Tuser } from './tuser';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class TableService {
dataURL = 'https://jsonplaceholder.typicode.com/todos'; 
PostUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient) { }
   getdata (): Observable<Duser[]> {
    return this.http.get<Duser[]>(this.PostUrl)
  }
   addHero (body,title,id,userid): Observable<Duser> {
  var data =  JSON.stringify({userId: userid, id: id, title: title, body : body});
   	console.log(data);
    return this.http.post<Duser>(this.PostUrl, data, httpOptions)
  }
  getnewdata(): Observable<Tuser[]> {
    return this.http.get<Tuser[]>(this.dataURL)
  }
  deletedata (id: number): Observable<{}> {
    console.log(id);
    const url = '${this.PostUrl}/${id}'; //
    return this.http.delete(url, httpOptions)
  }
}