import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { JwtService } from './jwt.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const httpOptions = {
      params,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': this.jwtService.getToken(),
      })
    }
    return this.http.get(`${environment.api_url}${path}`, httpOptions)
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': this.jwtService.getToken(),
      })
    }
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': this.jwtService.getToken(),
      })
    }
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      httpOptions
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': this.jwtService.getToken(),
      })
    }
    return this.http.delete(
      `${environment.api_url}${path}`,
      httpOptions
    )
      .pipe(catchError(this.formatErrors));
  }
}
