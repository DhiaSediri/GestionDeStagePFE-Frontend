import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FileData } from '../_models/file-data';

@Injectable({
  providedIn: 'root'
})
export class DownloadDocumentsDeStageService {

  constructor(private http: HttpClient) {
  }

  download(file: string | undefined): Observable<Blob> {
    return this.http.get(`${environment.baseUrl}/api/files/${file}`, {
      responseType: 'blob'
    });
  }

  list(): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.baseUrl}/api/files`);
  }
}
