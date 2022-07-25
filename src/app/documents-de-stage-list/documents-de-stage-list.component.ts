import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsDeStage } from '../_models/documents-de-stage';
import { DocumentsDeStageService } from '../_services/documents-de-stage.service';

@Component({
  selector: 'app-documents-de-stage-list',
  templateUrl: './documents-de-stage-list.component.html',
  styleUrls: ['./documents-de-stage-list.component.css']
})
export class DocumentsDeStageListComponent implements OnInit {

  mots_cles?: string;

  _documentsDeStagelist : DocumentsDeStage[]=[];

  constructor(private _service:DocumentsDeStageService, private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._documentsDeStagelist=[];
    this._service.fetchDocumentsDeStageListFromRemote().subscribe(   
      (data: DocumentsDeStage[]) => {
        console.log("Response Recieved");
        this._documentsDeStagelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  fetchDocumentsDeStageListParRecherche(): void {
    this._documentsDeStagelist=[];
    this._service.fetchDocumentsDeStageListParRechercheFromRemote(this.mots_cles).subscribe(   
      (data: DocumentsDeStage[]) => {
        console.log("Response Recieved");
        this._documentsDeStagelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  goToAddDocumentsDeStage(){
    this._router.navigate(['/addDocumentsDeStage']);
  }

  goToEditDocumentsDeStage(id : number){
    console.log("id "+id);
    this._router.navigate(['/editDocumentsDeStage', id]);
  }

  goToViewDocumentsDeStage(id : number){
    console.log("id "+id);
    this._router.navigate(['/viewDocumentsDeStage', id]);
  }

  deleteDocumentsDeStage(id : number){
    this._service.deleteDocumentsDeStageByIdFromRemote(id).subscribe(
      () => {
        console.debug("Deleted Successfully");
        //this._router.navigate(['/listDocumentsDeStage']);
        this.loadData();
      },
      () => {
        console.log("Exception Occured");
        this.loadData();
      }
    );
  }

  goToListDocumentsDeStageDEPOSEE() {
    this._router.navigate(['/listDocumentsDeStageDEPOSEE']);
  }

}
