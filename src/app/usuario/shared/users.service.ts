import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Users } from './';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  insert(user: Users): Observable<any> {
    return this.http.post("http://localhost:8080/users", user);
  }

  getTodos(): Observable<any> {
    return this.http.get("http://localhost:8080/users");
  }

}
