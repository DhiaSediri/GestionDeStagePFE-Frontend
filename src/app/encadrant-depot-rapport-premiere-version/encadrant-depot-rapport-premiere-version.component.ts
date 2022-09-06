import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../_models/commentaire';
import { Depot } from '../_models/depot';
import { FileData } from '../_models/file-data';
import { CommentaireService } from '../_services/commentaire.service';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-encadrant-depot-rapport-premiere-version',
  templateUrl: './encadrant-depot-rapport-premiere-version.component.html',
  styleUrls: ['./encadrant-depot-rapport-premiere-version.component.css']
})
export class EncadrantDepotRapportPremiereVersionComponent implements OnInit {

  currentUser: any;

  etudiant_email : any;

  etudiant_id : any;

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  depotRapport_premiere_version = new Depot();

  etatRapport_premiere_version = false;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute, private https: HttpClient, private _router: Router, private commentaireService:CommentaireService, private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFileList();
    this.getCommentaireRapport_premiere_versionList();
    this.loadDetailsDepotRapport_premiere_version();
    this.testerEtatRapport_premiere_version();
  }

  loadDetailsDepotRapport_premiere_version() {
    this.depotService.fetchDetailsDepotRapport_premiere_versionByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotRapport_premiere_version = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatRapport_premiere_version() {
    this.depotService.existeRapport_premiere_version(this.etudiant_id).subscribe(
      dataExisteRapport_premiere_version => {
        console.log(dataExisteRapport_premiere_version);   
            
        if(dataExisteRapport_premiere_version == true){
            
          this.depotService.etatRapport_premiere_version(this.etudiant_id).subscribe(
            dataEtatRapport_premiere_version => {
              console.log(dataEtatRapport_premiere_version); 

              if(dataEtatRapport_premiere_version == 2){
                this.etatRapport_premiere_version = true;
              }
            },
          error => console.log("Exception Occured")        
          );
        }  
      },
    error => console.log("Exception Occured")        
    );       
  }

  getFileList(): void {
    this.depotService.listFileDepotRapport_premiere_version(this.etudiant_email).subscribe(result => {
      this.fileList = result;
    });
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfRapport_premiere_version(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfRapport_premiere_version(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireRapport_premiere_versionList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireRapport_premiere_versionListFromRemote(this.etudiant_id).subscribe(   
      (data: Commentaire[]) => {
        console.log("Response Recieved");
        this._commentairelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  addCommentaireRapport_premiere_versionFormSubmit(){ 
    this.commentaireService.addCommentaireRapport_premiere_versionToRemote(this.currentUser.id, this.commentaire.contenu).subscribe(
      () => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/depotRapport_premiere_version']);
      },
      () => console.log("Error")     
    );
  }

  goToEditCommentaireRapport_premiere_version(id : number){
    console.log("id "+id);
    this._router.navigate(['/editCommentaireFiche_de_stage', id]);
  }

  deleteCommentaireRapport_premiere_version(id : number){
    this.commentaireService.deleteCommentaireByIdFromRemote(id).subscribe(
      () => {
        console.debug("Deleted Successfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/depotRapport_premiere_version']);
      },
      () => {
        console.log("Exception Occured");
      }
    );
  }

  emailSenderConfirmationTraitementDepotToStudent(depotRapport_premiere_version: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsConfirmationTraitementDepotToStudent', depotRapport_premiere_version).subscribe(
      res => {
        console.log(depotRapport_premiere_version);
        //alert('Email Sent successfully');
      });
  }

  traitementDepot() {
    this.depotService.declarerTraitementDepotRapport_premiere_version(this.etudiant_id).subscribe(
      data => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this.emailSenderConfirmationTraitementDepotToStudent(data);
      },
      error => console.log("Exception Occured")        
    );
  }

}
