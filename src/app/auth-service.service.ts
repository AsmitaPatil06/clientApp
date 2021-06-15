import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseUrl } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {

    return this.http.post(`http://hmaapi.kilobytetech.com/auth/login`, data);

  }
  clientGet() {
    let token = sessionStorage.getItem('token');

    let header: HttpHeaders = new HttpHeaders({ Authorization: `${token}` });

    return this.http.get('http://hmaapi.kilobytetech.com/users?pageNo=1&size=20', { headers: header })
  }
}
