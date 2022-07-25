import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { OffreDeStage } from '../_models/offre-de-stage';
import { RapportDeStage } from '../_models/rapport-de-stage';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) {
  }

  uploadFileOffresDeStage(file: File, societe: string | undefined, session: string | undefined, option: string | undefined): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileOffresDeStage/${societe}/${session}/${option}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  uploadFileRapportsDeStage(file: File, session: string | undefined, option: string | undefined, encadrant: string | undefined): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileRapportsDeStage/${session}/${option}/${encadrant}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  ///////////////////////////////////////// CRUD Offre De Stage //////////////////////////////////////////

  fetchOffreDeStageListParRechercheFromRemote(mots_cles: string | undefined):Observable<any>{

    return this.http.get<any>("http://localhost:8081/api/offreDeStage/getOffreDeStageListParRecherche/"+mots_cles);
  }

  fetchOffreDeStageListFromRemote():Observable<any>{

    return this.http.get<any>("http://localhost:8081/api/offreDeStage/getOffreDeStageList");
  }

  addOffreDeStageToRemote(offreDeStage : OffreDeStage):Observable<any>{

    return this.http.post<any>("http://localhost:8081/api/offreDeStage/addOffreDeStage", offreDeStage);
  }

  fetchOffreDeStageByIdFromRemote(id : number):Observable<any>{

    return this.http.get<any>("http://localhost:8081/api/offreDeStage/getOffreDeStageById/"+id);
  }

  deleteOffreDeStageByIdFromRemote(id : number):Observable<string>{

    return this.http.delete<string>("http://localhost:8081/api/offreDeStage/deleteOffreDeStageById/"+id);
  }

  ///////////////////////////////////////// CRUD Rapport De Stage //////////////////////////////////////////

  fetchRapportDeStageListParRechercheFromRemote(mots_cles: string | undefined):Observable<any>{

    return this.http.get<any>("http://localhost:8081/api/rapportDeStage/getRapportDeStageListParRecherche/"+mots_cles);
  }

  fetchRapportDeStageListFromRemote():Observable<any>{

    return this.http.get<any>("http://localhost:8081/api/rapportDeStage/getRapportDeStageList");
  }

  addRapportDeStageToRemote(rapportDeStage : RapportDeStage):Observable<any>{

    return this.http.post<any>("http://localhost:8081/api/rapportDeStage/addRapportDeStage", rapportDeStage);
  }

  fetchRapportDeStageByIdFromRemote(id : number):Observable<any>{

    return this.http.get<any>("http://localhost:8081/api/rapportDeStage/getRapportDeStageById/"+id);
  }

  deleteRapportDeStageByIdFromRemote(id : number):Observable<string>{

    return this.http.delete<string>("http://localhost:8081/api/rapportDeStage/deleteRapportDeStageById/"+id);
  }

}
