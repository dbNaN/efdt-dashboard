import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  get(path: string): Observable<any> {
    return this.http.get(`${environment.basePath}${path}`);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.basePath}${path}`, body);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.basePath}${path}`);
  }
}
