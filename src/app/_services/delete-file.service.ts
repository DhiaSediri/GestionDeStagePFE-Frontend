import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileData } from '../_models/file-data';

@Injectable({
  providedIn: 'root'
})
export class DeleteFileService {

  constructor(private http: HttpClient) {
  }

  delete(file: string | undefined): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/files/delete/${file}`);
  }

  list(): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.baseUrl}/api/files`);
  }

}
