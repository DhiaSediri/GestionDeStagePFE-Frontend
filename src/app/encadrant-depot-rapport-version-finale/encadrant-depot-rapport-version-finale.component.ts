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
  selector: 'app-encadrant-depot-rapport-version-finale',
  templateUrl: './encadrant-depot-rapport-version-finale.component.html',
  styleUrls: ['./encadrant-depot-rapport-version-finale.component.css']
})
export class EncadrantDepotRapportVersionFinaleComponent implements OnInit {

  currentUser: any;

  etudiant_email : any;

  etudiant_id : any;

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute, private https: HttpClient, private _router: Router, private commentaireService:CommentaireService, private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFileList();
  }

  getFileList(): void {
    this.depotService.listFileDepotRapport_version_finale(this.etudiant_email).subscribe(result => {
      this.fileList = result;
    });
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfRapport_version_finale(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfRapport_version_finale(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireRapport_version_finaleList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireRapport_version_finaleListFromRemote(this.etudiant_id).subscribe(   
      (data: Commentaire[]) => {
        console.log("Response Recieved");
        this._commentairelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  addCommentaireRapport_version_finaleFormSubmit(){ 
    this.commentaireService.addCommentaireRapport_version_finaleToRemote(this.currentUser.id, this.commentaire.contenu).subscribe(
      () => {
        console.log("Data add succesfully");
        this._router.navigate(['/depotRapport_version_finale']);
      },
      () => console.log("Error")     
    );
  }

  goToEditCommentaireRapport_version_finale(id : number){
    console.log("id "+id);
    this._router.navigate(['/editCommentaireRapport_version_finale', id]);
  }

  deleteCommentaireRapport_version_finale(id : number){
    this.commentaireService.deleteCommentaireByIdFromRemote(id).subscribe(
      () => {
        console.debug("Deleted Successfully");
        this._router.navigate(['/depotRapport_version_finale']);
      },
      () => {
        console.log("Exception Occured");
      }
    );
  }

  emailSenderConfirmationTraitementDepotToStudent(depotRapport_version_finale: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsConfirmationTraitementDepotToStudent', depotRapport_version_finale).subscribe(
      res => {
        console.log(depotRapport_version_finale);
        alert('Email Sent successfully');
      });
  }

  traitementDepot() {
    this.depotService.declarerTraitementDepotRapport_version_finale(this.etudiant_id).subscribe(
      data => {
        console.log("Data add succesfully");
        this.emailSenderConfirmationTraitementDepotToStudent(data);
      },
      error => console.log("Exception Occured")        
    );
  }

}
