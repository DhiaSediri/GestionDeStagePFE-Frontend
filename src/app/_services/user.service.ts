import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const API_URL = 'http://localhost:8081/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getStudentBoard(): Observable<any> {
    return this.http.get(API_URL + 'student', { responseType: 'text' });
  }

  getAcademicSupervisorBoard(): Observable<any> {
    return this.http.get(API_URL + 'academicSupervisor	', { responseType: 'text' });
  }


  fetchListUsers():Observable<any>{

    return this.http.get<any>("http://localhost:8081/api/user/getUserList");
  }

  addUser(user : User):Observable<any>{

    return this.http.post<any>("http://localhost:8081//api/user/addUser", user);
  }

  fetchUserById(id : number):Observable<any>{

    return this.http.get<any>("http://localhost:8081/api/user/getUserById/"+id);
  }

  deleteUserById(id : number):Observable<string>{

    return this.http.delete<string>("http://localhost:8081/api/user/deleteUserById/"+id);
  }

}