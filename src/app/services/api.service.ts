import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string, options?: any): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com${url}`, options);
  }

  post(url: string, body: any, options?: any): Observable<any> {
    return this.http.post(`https://jsonplaceholder.typicode.com${url}`, body, options)
  }
}
