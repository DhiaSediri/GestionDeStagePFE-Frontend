import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FileData } from '../_models/file-data';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor(private http: HttpClient) {
  }

///////////////////////////////////////////// Documents De Stage /////////////////////////////////////////////////////////////////////

  download(file: string | undefined, emailEtudiant: string | undefined | null): Observable<Blob> {
    return this.http.get(`${environment.baseUrl}/api/files/${file}/${emailEtudiant}`, {
      responseType: 'blob'
    });
  }

  listDocumentsDeStage(emailEtudiant: string | undefined | null): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDocumentsDeStage/${emailEtudiant}`);
  }

  getPdfDocumentsDeStage(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this.http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfDocumentsDeStage/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  } 

  ///////////////////////////////////////////// Rendez-Vous De Stage /////////////////////////////////////////////////////////////////////
  
  downloadFilesRendezVousDeStage(file: string | undefined): Observable<Blob> {
    return this.http.get(`${environment.baseUrl}/api/files/downloadFilesRendezVousDeStage/${file}`, {
      responseType: 'blob'
    });
  }

  listFilesRendezVousDeStage(): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFilesRendezVousDeStage`);
  }

  getPdfRendezVousDeStage(fileName: string | undefined) {
    return this.http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfRendezVousDeStage/${fileName}`, { responseType: 'arraybuffer' as 'json' });
  }

  deleteFileRendezVousDeStage(file: string | undefined): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/files/deleteFileRendezVousDeStage/${file}`);
  }

  uploadFileRendezVousDeStage(file: File): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileRendezVousDeStage`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  ///////////////////////////////////////////// Fiche De Stage ///////////////////////////////////////////////////////////////////////

  downloadFilesFichesDeStage(file: string | undefined | null): Observable<Blob> {
    return this.http.get(`${environment.baseUrl}/api/files/downloadFilesFichesDeStage/${file}`, {
      responseType: 'blob'
    });
  }

  listFilesFichesDeStage(): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFilesFichesDeStage`);
  }

  getPdfFichesDeStage(fileName: string | undefined) {
    return this.http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfFichesDeStage/${fileName}`, { responseType: 'arraybuffer' as 'json' });
  }

  deleteFileFichesDeStage(file: string | undefined): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/files/deleteFileFichesDeStage/${file}`);
  }

  uploadFileFichesDeStage(file: File): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileFichesDeStage`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

}
