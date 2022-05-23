import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsDeStage } from '../_models/documents-de-stage';
import { DocumentsDeStageService } from '../_services/documents-de-stage.service';

@Component({
  selector: 'app-documents-de-stage-list-deposee',
  templateUrl: './documents-de-stage-list-deposee.component.html',
  styleUrls: ['./documents-de-stage-list-deposee.component.css']
})
export class DocumentsDeStageListDEPOSEEComponent implements OnInit {

  _ListdocumentsDeStageDEPOSEE : DocumentsDeStage[]=[];

  constructor(private _service:DocumentsDeStageService, private _router: Router, private https: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {

    this._ListdocumentsDeStageDEPOSEE=[];
    this._service.fetchListDocumentsDeStageDEPOSEEFromRemote().subscribe(   
      (data: DocumentsDeStage[]) => {
        console.log("Response Recieved");
        this._ListdocumentsDeStageDEPOSEE=data;
      },
      () => console.log("Exception Occured")
    );
  }

  emailSenderDemandeDeStageAcceptee(documentsDeStage: DocumentsDeStage) {
    this.https.post<DocumentsDeStage>('http://localhost:8081/emailSender/getdetailsDemandeDeStageAcceptee', documentsDeStage).subscribe(
      res => {
        console.log(documentsDeStage);
        alert('Email Sent successfully');
      });
  }

  emailSenderDemandeDeStageRefusee(documentsDeStage: DocumentsDeStage) {
    this.https.post<DocumentsDeStage>('http://localhost:8081/emailSender/getdetailsDemandeDeStageRefusee', documentsDeStage).subscribe(
      res => {
        console.log(documentsDeStage);
        alert('Email Sent successfully');
      });
  }

  accepterDemande(documentsDeStage: DocumentsDeStage){
    
    this._service.accepterDemande(documentsDeStage).subscribe(
      () => {
        console.log("Data add succesfully");
        this._router.navigate(['listDocumentsDeStage']);
        this.emailSenderDemandeDeStageAcceptee(documentsDeStage);
      },
      () => console.log("Error")     
    );
  }

  refuserDemande(documentsDeStage: DocumentsDeStage){
    
    this._service.refuserDemande(documentsDeStage).subscribe(
      () => {
        console.log("Data add succesfully");
        this._router.navigate(['listDocumentsDeStage']);
        this.emailSenderDemandeDeStageRefusee(documentsDeStage);
      },
      () => console.log("Error")     
    );
  }

  goToListDocumentsDeStage() {
    this._router.navigate(['listDocumentsDeStage']);
  }

}
