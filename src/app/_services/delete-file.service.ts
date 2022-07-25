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

  ///////////////////////////////////////////////////// Offres De Stage /////////////////////////////////////////////////////

  listFileOffresDeStage(societe: string | undefined, session: string | undefined, option: string | undefined): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileOffresDeStage/${societe}/${session}/${option}`);
  }

  getPdfOffresDeStage(fileName: string | undefined, societe: string | undefined, session: string | undefined, option: string | undefined) {
    return this.http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfOffresDeStage/${fileName}/${societe}/${session}/${option}`, { responseType: 'arraybuffer' as 'json' });
  }

  deleteFileOffresDeStage(file: string | undefined, societe: string | undefined, session: string | undefined, option: string | undefined): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/files/deleteFileOffresDeStage/${file}/${societe}/${session}/${option}`);
  }

    ///////////////////////////////////////////////////// Rapports De Stage /////////////////////////////////////////////////////

  listFileRapportsDeStage(session: string | undefined, option: string | undefined, encadrant: string | undefined): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileRapportsDeStag/${session}/${option}/${encadrant}e`);
  }

  getPdfRapportsDeStage(fileName: string | undefined, session: string | undefined, option: string | undefined, encadrant: string | undefined) {
    return this.http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfRapportsDeStage/${fileName}/${session}/${option}/${encadrant}`, { responseType: 'arraybuffer' as 'json' });
  }  

  deleteFileRapportsDeStage(file: string | undefined, session: string | undefined, option: string | undefined, encadrant: string | undefined): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/files/deleteFileRapportsDeStage/${file}/${session}/${option}/${encadrant}`);
  }

}
