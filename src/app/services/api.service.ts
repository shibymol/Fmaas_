import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,

  ) { }

  get(url : any) {
    let headers = new Headers();
    return this.http.get(url);
  }
  httpGet(url: string): Observable<any> {
    const Link = environment.baseUrl + url;
    // const header = new HttpHeaders().set('Authorization');
    // const headers = { headers: header };
    return this.http.get(Link)
      .pipe(map(Response => this.checkResponse(Response)),
        catchError((error) => throwError(this.handleError(error))));
  }
  httpPost(url: string, data: any): Observable<any> {
    const Link = environment.baseUrl + url;
    // const header = new HttpHeaders().set('Authorization', this._store.getData('token'));
    // const headers = { headers: header };
    return this.http.post(Link, data)
      .pipe(map(Response => this.checkResponse(Response)),
        catchError((error) => throwError(this.handleError(error))));
  }

  handleError(error: any): any {
    // console.log(error);
    return error;
  }
  checkResponse(response: any): any {
    const results = response;
    if (results.success || results.status) {
      return results;
    } else {
      return { error: results.error };
    }
  }
}
