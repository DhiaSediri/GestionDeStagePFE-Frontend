import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../_models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private _http :HttpClient) { }

  //////////////////////////////////////// Récuperer la liste des Commentaires de chaque Dépot ////////////////////////////////////////

  fetchCommentaireFiche_de_stageListFromRemote(userId : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireFiche_de_stageList/"+userId);
  }

  fetchCommentaireBilan_periodique_debut_du_stageFromRemote(userId : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireBilan_periodique_debut_du_stageList/"+userId);
  }

  fetchCommentaireBilan_periodique_milieu_du_stageListFromRemote(userId : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireBilan_periodique_milieu_du_stageList/"+userId);
  }

  fetchCommentaireBilan_periodique_fin_du_stageListFromRemote(userId : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireBilan_periodique_fin_du_stageList/"+userId);
  }

  fetchCommentaireRapport_premiere_versionListFromRemote(userId : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireRapport_premiere_versionList/"+userId);
  }

  fetchCommentaireRapport_version_finaleListFromRemote(userId : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireRapport_version_finaleList/"+userId);
  }

  fetchCommentaireJournal_de_stageListFromRemote(userId : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireJournal_de_stageList/"+userId);
  }

  ////////////////////////////////////////////////// CRUD Commentaire //////////////////////////////////////////////////

  addCommentaireFiche_de_stageToRemote(userId : number, contenu: string | undefined):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/addCommentaireFiche_de_stage/" +userId, contenu);
  }

  addCommentaireBilan_periodique_debut_du_stageToRemote(userId : number, contenu: string | undefined):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/addCommentaireBilan_periodique_debut_du_stage/" +userId, contenu);
  }

  addCommentaireBilan_periodique_milieu_du_stageToRemote(userId : number, contenu: string | undefined):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/addCommentaireBilan_periodique_milieu_du_stage/" +userId, contenu);
  }

  addCommentaireBilan_periodique_fin_du_stageToRemote(userId : number, contenu: string | undefined):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/addCommentaireBilan_periodique_fin_du_stage/" +userId, contenu);
  }

  addCommentaireRapport_premiere_versionToRemote(userId : number, contenu: string | undefined):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/addCommentaireRapport_premiere_version/" +userId, contenu);
  }

  addCommentaireRapport_version_finaleToRemote(userId : number, contenu: string | undefined):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/addCommentaireRapport_version_finale/" +userId, contenu);
  }

  addCommentaireJournal_de_stageToRemote(userId : number, contenu: string | undefined):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/addCommentaireJournal_de_stage/" +userId, contenu);
  }

  editCommentaireFiche_de_stageToRemote(commentaire: Commentaire):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/editCommentaireFiche_de_stage", commentaire);
  }

  editCommentaireBilan_periodique_debut_du_stageToRemote(commentaire: Commentaire):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/editCommentaireBilan_periodique_debut_du_stage", commentaire);
  }

  editCommentaireBilan_periodique_milieu_du_stageToRemote(commentaire: Commentaire):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/editCommentaireBilan_periodique_milieu_du_stage", commentaire);
  }

  editCommentaireBilan_periodique_fin_du_stageToRemote(commentaire: Commentaire):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/editCommentaireBilan_periodique_fin_du_stage", commentaire);
  }

  editCommentaireRapport_premiere_versionToRemote(commentaire: Commentaire):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/editCommentaireRapport_premiere_version", commentaire);
  }

  editCommentaireJournal_de_stageToRemote(commentaire: Commentaire):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/commentaire/editCommentaireJournal_de_stage", commentaire);
  }


  fetchCommentaireByIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireById/"+id);
  }

  deleteCommentaireByIdFromRemote(id : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/commentaire/deleteCommentaireById/"+id);
  }

  fetchCommentaireListFromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/commentaire/getCommentaireList");
  }

}
