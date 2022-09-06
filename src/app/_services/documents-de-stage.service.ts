import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentsDeStage } from '../_models/documents-de-stage';

@Injectable({
  providedIn: 'root'
})
export class DocumentsDeStageService {

  constructor(private _http :HttpClient) { }

  verifierDureeDeStage(documentsDeStage : DocumentsDeStage):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/documentsDeStage/verifierDureeDeStage", documentsDeStage);
  }

  fetchDocumentsDeStageListParRechercheFromRemote(mots_cles: string | undefined):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/documentsDeStage/getDocumentsDeStageListParRecherche/"+mots_cles);
  }

  fetchDocumentsDeStageListFromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/documentsDeStage/getDocumentsDeStageList");
  }

  addDocumentsDeStageToRemote(documentsDeStage : DocumentsDeStage):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/documentsDeStage/addDocumentsDeStage", documentsDeStage);
  }

  fetchDocumentsDeStageByIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/documentsDeStage/getDocumentsDeStageById/"+id);
  }

  deleteDocumentsDeStageByIdFromRemote(id : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/documentsDeStage/deleteDocumentsDeStageById/"+id);
  }

  ///////////////////////////////////////////// Traitement Demande de stage /////////////////////////////////////////////

  fetchListDocumentsDeStageDEPOSEEParRechercheFromRemote(mots_cles: string | undefined):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/documentsDeStage/getDocumentsDeStageDEPOSEEListParRecherche/"+mots_cles);
  }

  fetchListDocumentsDeStageDEPOSEEFromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/documentsDeStage/getListDocumentsDeStageDEPOSEE");
  }

  accepterDemande(documentsDeStage : DocumentsDeStage):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/documentsDeStage/accepterDemande", documentsDeStage);
  }

  refuserDemande(documentsDeStage : DocumentsDeStage):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/documentsDeStage/refuserDemande", documentsDeStage);
  }

}
