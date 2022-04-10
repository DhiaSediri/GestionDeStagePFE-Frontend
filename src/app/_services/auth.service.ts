import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const AUTH_API = 'http://localhost:8081/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { username: any; email: any; password: any; }): Observable<any> {
    console.log(user);
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
    }, httpOptions);
  }

  addUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    }, httpOptions);
  }

  editUser(user: User): Observable<any> {
    console.log(user);
    return this.http.post(AUTH_API + 'editUser', {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    }, httpOptions);
  }
}