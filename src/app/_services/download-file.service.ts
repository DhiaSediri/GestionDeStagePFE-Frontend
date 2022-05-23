import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FileData } from '../_models/file-data';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private http: HttpClient) {
  }

  download(file: string | undefined, emailEtudiant: string | undefined | null): Observable<Blob> {
    return this.http.get(`${environment.baseUrl}/api/files/${file}/${emailEtudiant}`, {
      responseType: 'blob'
    });
  }

  listDocumentsDeStage( ): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDocumentsDeStage/${folder}`);
  }

  getPdfDocumentsDeStage(fileName: string, folder: string | ) {
    return this.http.get<any>(`http://localhost:4200/api/viewPDF/getPdfDocumentsDeStage/${fileName}/${folder}`, { responseType: 'arraybuffer' as 'json' });
  }

}
