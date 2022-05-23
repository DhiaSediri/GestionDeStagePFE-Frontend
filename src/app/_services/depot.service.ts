import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depot } from '../_models/depot';
import { FileData } from '../_models/file-data';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private _http :HttpClient) { }

  fetchDepotListFromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDepotList");
  }

  fetchDepotByIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDepotById/"+id);
  }

  deleteDepotByIdFromRemote(id : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotById/"+id);
  }

  addDepotConvention_de_stageToRemote(depot : Depot):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotConvention_de_stage", depot);
  }

  addDepotFiche_de_stageToRemote(depot : Depot):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotFiche_de_stage", depot);
  }

  addDepotBilan_périodique_début_du_stageToRemote(depot : Depot):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotBilan_périodique_début_du_stage", depot);
  }

  addDepotBilan_périodique_milieu_du_stageToRemote(depot : Depot):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotBilan_périodique_milieu_du_stage", depot);
  }

  addDepotBilan_périodique_fin_du_stageToRemote(depot : Depot):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotBilan_périodique_fin_du_stage", depot);
  }

  addDepotRapport_premiere_versionToRemote(depot : Depot):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotRapport_premiere_version", depot);
  }

  addDepotRapport_version_finaleToRemote(depot : Depot):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotRapport_version_finale", depot);
  }

  addDepotJournal_de_stageToRemote(depot : Depot):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotJournal_de_stage", depot);
  }

  listFileDepotEtudiant(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotEtudiant/${folder}`);
  }

  uploadFileDepot(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {
    
    /*const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepot/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });*/

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepot/${file}/${folder}`, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  deleteFileDepot(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepot/${file}/${folder}`);
  }
}
