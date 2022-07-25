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

  ///////////////////////////////////////////////////// List Depot /////////////////////////////////////////////////////

  fetchDepotConvention_de_stageListParRechercheFromRemote(mots_cles: string | undefined):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDepotConvention_de_stageListParRecherche/"+mots_cles);
  }

  fetchDepotConvention_de_stageListFromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDepotConvention_de_stageList");
  }

  fetchDepotListFromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDepotList");
  }

  ///////////////////////////////////////////////////// Delete Depot /////////////////////////////////////////////////////

  deleteDepotConvention_de_stageByEtudiantIdFromRemote(etudiantId : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotConvention_de_stageByEtudiantId/"+etudiantId);
  }

  deleteDepotFiche_de_stageByEtudiantIdFromRemote(etudiantId : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotFiche_de_stageByEtudiantId/"+etudiantId);
  }

  deleteDepotBilan_périodique_début_du_stageByEtudiantIdFromRemote(etudiantId : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotBilan_périodique_début_du_stageByEtudiantId/"+etudiantId);
  }

  deleteDepotBilan_périodique_milieu_du_stageByEtudiantIdFromRemote(etudiantId : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotBilan_périodique_milieu_du_stageByEtudiantId/"+etudiantId);
  }

  deleteDepotBilan_périodique_fin_du_stageByEtudiantIdFromRemote(etudiantId : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotBilan_périodique_fin_du_stageByEtudiantId/"+etudiantId);
  }

  deleteDepotRapport_premiere_versionByEtudiantIdFromRemote(etudiantId : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotRapport_premiere_versionByEtudiantId/"+etudiantId);
  }

  deleteDepotRapport_version_finaleByEtudiantIdFromRemote(etudiantId : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotRapport_version_finaleByEtudiantId/"+etudiantId);
  }

  deleteDepotJournal_de_stageByEtudiantIdFromRemote(etudiantId : number):Observable<string>{

    return this._http.delete<string>("http://localhost:8081/api/depot/deleteDepotJournal_de_stageByEtudiantId/"+etudiantId);
  }

  ///////////////////////////////////////////////////// Add Depot /////////////////////////////////////////////////////

  addDepotConvention_de_stageToRemote(etudiantId : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotConvention_de_stage", etudiantId);
  }

  addDepotFiche_de_stageToRemote(etudiantId : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotFiche_de_stage", etudiantId);
  }

  addDepotBilan_périodique_début_du_stageToRemote(etudiantId : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotBilan_périodique_début_du_stage", etudiantId);
  }

  addDepotBilan_périodique_milieu_du_stageToRemote(etudiantId : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotBilan_périodique_milieu_du_stage", etudiantId);
  }

  addDepotBilan_périodique_fin_du_stageToRemote(etudiantId : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotBilan_périodique_fin_du_stage", etudiantId);
  }

  addDepotRapport_premiere_versionToRemote(etudiantId : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotRapport_premiere_version", etudiantId);
  }

  addDepotRapport_version_finaleToRemote(etudiantId : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotRapport_version_finale", etudiantId);
  }

  addDepotJournal_de_stageToRemote(etudiantId : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/addDepotJournal_de_stage", etudiantId);
  }

  ///////////////////////////////////////////////////// List File Depot /////////////////////////////////////////////////////

  listFileDepotConvention_de_stage(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotConvention_de_stage/${folder}`);
  }

  listFileDepotFiche_de_stage(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotFiche_de_stage/${folder}`);
  }

  listFileDepotBilan_périodique_debut_du_stage(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotBilan_périodique_début_du_stage/${folder}`);
  }

  listFileDepotBilan_périodique_milieu_du_stage(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotBilan_périodique_milieu_du_stage/${folder}`);
  }

  listFileDepotBilan_périodique_fin_du_stage(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotBilan_périodique_fin_du_stage/${folder}`);
  }

  listFileDepotRapport_premiere_version(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotRapport_premiere_version/${folder}`);
  }

  listFileDepotRapport_version_finale(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotRapport_version_finale/${folder}`);
  }

  listFileDepotJournal_de_stage(folder: string | null | undefined): Observable<FileData[]> {
    return this._http.get<FileData[]>(`${environment.baseUrl}/api/files/getListFileDepotJournal_de_stage/${folder}`);
  }

  ///////////////////////////////////////////////////// Upload File Depot /////////////////////////////////////////////////////

  uploadFileDepotConvention_de_stage(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepotConvention_de_stage/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  uploadFileDepotFiche_de_stage(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {
    
   const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepotFiche_de_stage/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  uploadFileDepotBilan_périodique_début_du_stage(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepotBilan_périodique_début_du_stage/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  uploadFileDepotBilan_périodique_milieu_du_stage(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepotBilan_périodique_milieu_du_stage/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  uploadFileDepotBilan_périodique_fin_du_stage(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepotBilan_périodique_fin_du_stage/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  uploadFileDepotRapport_premiere_version(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepotRapport_premiere_version/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  uploadFileDepotRapport_version_finale(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepotRapport_version_finale/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  uploadFileDepotJournal_de_stage(file: File, folder: string | null | undefined): Observable<HttpEvent<any>> {
    
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.baseUrl}/api/files/uploadFileDepotJournal_de_stage/${folder}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }

  ///////////////////////////////////////////////////// Delete File Depot /////////////////////////////////////////////////////

  deleteFileDepotConvention_de_stage(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepotConvention_de_stage/${file}/${folder}`);
  }

  deleteFileDepotFiche_de_stage(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepotFiche_de_stage/${file}/${folder}`);
  }

  deleteFileDepotBilan_périodique_début_du_stage(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepotBilan_périodique_début_du_stage/${file}/${folder}`);
  }

  deleteFileDepotBilan_périodique_milieu_du_stage(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepotBilan_périodique_milieu_du_stage/${file}/${folder}`);
  }

  deleteFileDepotBilan_périodique_fin_du_stage(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepotBilan_périodique_fin_du_stage/${file}/${folder}`);
  }

  deleteFileDepotRapport_premiere_version(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepotRapport_premiere_version/${file}/${folder}`);
  }

  deleteFileDepotRapport_version_finale(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepotRapport_version_finale/${file}/${folder}`);
  }

  deleteFileDepotJournal_de_stage(file: string | undefined, folder: string | null | undefined): Observable<any> {
    return this._http.delete(`${environment.baseUrl}/api/files/deleteFileDepotJournal_de_stage/${file}/${folder}`);
  }

  ///////////////////////////////////////////////////// fetch Details Depot /////////////////////////////////////////////////////

  fetchDetailsDepotConvention_de_stageByEtudiantIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDetailsDepotConvention_de_stageByEtudiantId/"+id);
  }

  fetchDetailsDepotFiche_de_stageByEtudiantIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDetailsDepotFiche_de_stageByEtudiantId/"+id);
  }

  fetchDetailsDepotBilan_périodique_début_du_stageByEtudiantIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDetailsDepotBilan_périodique_début_du_stageByEtudiantId/"+id);
  }

  fetchDetailsDepotBilan_périodique_milieu_du_stageByEtudiantIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDetailsDepotBilan_périodique_milieu_du_stageByEtudiantId/"+id);
  }

  fetchDetailsDepotBilan_périodique_fin_du_stageByEtudiantIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDetailsDepotBilan_périodique_fin_du_stageByEtudiantId/"+id);
  }

  fetchDetailsDepotRapport_premiere_versionByEtudiantIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDetailsDepotRapport_premiere_versionByEtudiantId/"+id);
  }

  fetchDetailsDepotRapport_version_finaleByEtudiantIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDetailsDepotRapport_version_finaleByEtudiantId/"+id);
  }

  fetchDetailsDepotJournal_de_stageByEtudiantIdFromRemote(id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDetailsDepotJournal_de_stageByEtudiantId/"+id);
  }

  ///////////////////////////////////////////////////// get Pdf Depot /////////////////////////////////////////////////////

  getPdfConvention_de_stage(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this._http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfConvention_de_stage/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  }

  getPdfFiche_de_stage(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this._http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfFiche_de_stage/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  }

  getPdfBilan_périodique_début_du_stage(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this._http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfBilan_périodique_début_du_stage/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  }

  getPdfBilan_périodique_milieu_du_stage(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this._http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfBilan_périodique_milieu_du_stage/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  }

  getPdfBilan_périodique_fin_du_stage(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this._http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfBilan_périodique_fin_du_stage/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  }

  getPdfRapport_premiere_version(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this._http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfRapport_premiere_version/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  }

  getPdfRapport_version_finale(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this._http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfRapport_version_finale/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  }

  getPdfJournal_de_stage(fileName: string | undefined, emailEtudiant: string | undefined | null) {
    return this._http.get<any>(`${environment.baseUrl}/api/viewPDF/getPdfJournal_de_stage/${fileName}/${emailEtudiant}`, { responseType: 'arraybuffer' as 'json' });
  }

  ///////////////////////////////////////////////////// Traitement Depot /////////////////////////////////////////////////////

  fetchListDepotConvention_de_stageDEPOSEEParRechercheFromRemote(mots_cles: string | undefined):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getListDepotConvention_de_stageDEPOSEEParRecherche/"+mots_cles);
  }

  fetchDepotConvention_de_stageDEPOSEEListFromRemote():Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/getDepotConvention_de_stageDEPOSEEList");
  }

  accepterDepotConventionDeStage(depot_id : number):Observable<any>{

    return this._http.post<any>(`http://localhost:8081/api/depot/accepterDepotConventionDeStage/${depot_id}`,null);
  }

  refuserDepotConventionDeStage(depot_id : number):Observable<any>{

    return this._http.post<any>(`http://localhost:8081/api/depot/refuserDepotConventionDeStage/${depot_id}`, null);
  }

  declarerTraitementDepotFiche_de_stage(etudiant_id : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/declarerTraitementDepotFiche_de_stage", etudiant_id);
  }

  declarerTraitementDepotBilan_périodique_début_du_stage(etudiant_id : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/declarerTraitementDepotBilan_périodique_début_du_stage", etudiant_id);
  }

  declarerTraitementDepotBilan_périodique_milieu_du_stage(etudiant_id : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/declarerTraitementDepotBilan_périodique_milieu_du_stage", etudiant_id);
  }

  declarerTraitementDepotBilan_périodique_fin_du_stage(etudiant_id : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/declarerTraitementDepotBilan_périodique_fin_du_stage", etudiant_id);
  }

  declarerTraitementDepotRapport_premiere_version(etudiant_id : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/declarerTraitementDepotRapport_premiere_version", etudiant_id);
  }

  declarerTraitementDepotRapport_version_finale(etudiant_id : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/declarerTraitementDepotRapport_version_finale", etudiant_id);
  }

  declarerTraitementDepotJournal_de_stage(etudiant_id : number):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/depot/declarerTraitementDepotJournal_de_stage", etudiant_id);
  }

  /////////////// Tester l'existance et l'état de la Demande De Stage /////////////////////////

  existeDemandeDeStage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeDemandeDeStage/"+etudiant_id);
  }

  etatDemandeDeStage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatDemandeDeStage/"+etudiant_id);
  }

  /////////////// Tester l'existance et l'état de la Convention_de_stage //////////////////////

  existeConvention_de_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeConvention_de_stage/"+etudiant_id);
  }

  etatConvention_de_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatConvention_de_stage/"+etudiant_id);
  }

  /////////////// Tester l'existance et l'état de la Fiche_de_stage //////////////////////

  existeFiche_de_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeFiche_de_stage/"+etudiant_id);
  }

  etatFiche_de_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatFiche_de_stage/"+etudiant_id);
  }

  /////////////// Tester l'existance et l'état du Bilan_périodique_début_du_stage //////////////////////

  existeBilan_périodique_début_du_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeBilan_périodique_début_du_stage/"+etudiant_id);
  }

  etatBilan_périodique_début_du_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatBilan_périodique_début_du_stage/"+etudiant_id);
  }

  /////////////// Tester l'existance et l'état du Bilan_périodique_milieu_du_stage //////////////////////

  existeBilan_périodique_milieu_du_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeBilan_périodique_milieu_du_stage/"+etudiant_id);
  }

  etatBilan_périodique_milieu_du_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatBilan_périodique_milieu_du_stage/"+etudiant_id);
  }

  /////////////// Tester l'existance et l'état du Bilan_périodique_fin_du_stage //////////////////////

  existeBilan_périodique_fin_du_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeBilan_périodique_fin_du_stage/"+etudiant_id);
  }

  etatBilan_périodique_fin_du_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatBilan_périodique_fin_du_stage/"+etudiant_id);
  }

  /////////////// Tester l'existance et l'état du Rapport_premiere_version //////////////////////

  existeRapport_premiere_version(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeRapport_premiere_version/"+etudiant_id);
  }

  etatRapport_premiere_version(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatRapport_premiere_version/"+etudiant_id);
  }

  /////////////// Tester l'existance et l'état du Rapport_version_finale //////////////////////

  existeRapport_version_finale(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeRapport_version_finale/"+etudiant_id);
  }

  etatRapport_version_finale(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatRapport_version_finale/"+etudiant_id);
  }

  /////////////// Tester l'existance et l'état du Journal_de_stage //////////////////////

  existeJournal_de_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/existeJournal_de_stage/"+etudiant_id);
  }

  etatJournal_de_stage(etudiant_id : number):Observable<any>{

    return this._http.get<any>("http://localhost:8081/api/depot/etatJournal_de_stage/"+etudiant_id);
  }

}
