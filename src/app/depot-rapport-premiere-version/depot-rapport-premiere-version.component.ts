import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';
import { saveAs } from 'file-saver';
import { TokenStorageService } from '../_services/token-storage.service';
import { Depot } from '../_models/depot';
import { User } from '../_models/user';
import { Commentaire } from '../_models/commentaire';
import { CommentaireService } from '../_services/commentaire.service';

@Component({
  selector: 'app-depot-rapport-premiere-version',
  templateUrl: './depot-rapport-premiere-version.component.html',
  styleUrls: ['./depot-rapport-premiere-version.component.css']
})
export class DepotRapportPremiereVersionComponent implements OnInit {

  currentUser: any;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  depotRapport_premiere_version = new Depot();

  etatRapport_premiere_version = false;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private _router: Router, private token: TokenStorageService, private https: HttpClient, private commentaireService:CommentaireService) {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.depotService.uploadFileDepotRapport_premiere_version(this.currentFile, this.currentUser.email).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              console.log(Math.round(100 * event.loaded / event.total));
              this._router.navigate(['/depotRapport_premiere_version']);

            } else if (event instanceof HttpResponse) {
              this.message = event.body.responseMessage;
            }
          },
          (err: any) => {
            console.log(err);

            if (err.error && err.error.responseMessage) {
              this.errorMsg = err.error.responseMessage;
            } else {
              this.errorMsg = 'Error occurred while uploading a file!';
            }

            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }

    this.depotService.addDepotRapport_premiere_versionToRemote(this.currentUser.id).subscribe(
      (resultat) => {
        console.log("Data add succesfully");
        const etudiant = new User();
        etudiant.id = this.currentUser.id;
        resultat.user = etudiant;
        this.emailSenderUploadDepotToEncadrant(resultat);
      },
      () => console.log("Error")     
    );
  }

  emailSenderUploadDepotToEncadrant(depotRapport_premiere_version: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsUploadDepotToEncadrant', depotRapport_premiere_version).subscribe(
      res => {
        console.log(depotRapport_premiere_version);
        //alert('E-mail envoyé avec succès');
      });
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getFileList();
    this.getCommentaireRapport_premiere_versionList();
    this.loadDetailsDepotRapport_premiere_version();
    this.testerEtatRapport_premiere_version();
  }

  loadDetailsDepotRapport_premiere_version() {
    this.depotService.fetchDetailsDepotRapport_premiere_versionByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotRapport_premiere_version = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatRapport_premiere_version() {
    this.depotService.existeRapport_premiere_version(this.currentUser.id).subscribe(
      dataExisteRapport_premiere_version => {
        console.log(dataExisteRapport_premiere_version);   
            
        if(dataExisteRapport_premiere_version == true){
            
          this.depotService.etatRapport_premiere_version(this.currentUser.id).subscribe(
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
    this.depotService.listFileDepotRapport_premiere_version(this.currentUser.email).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {

    this.depotService.deleteFileDepotRapport_premiere_version(fileData.filename, this.currentUser.email)
      .subscribe(blob => saveAs(blob, fileData.filename));
      alert('Cette opération a été effectuée avec succès');
      this._router.navigate(['/depotRapport_premiere_version']);

      this.depotService.deleteDepotRapport_premiere_versionByEtudiantIdFromRemote(this.currentUser.id).subscribe(
        () => console.log("Data deleted succesfully"),
        () => console.log("Error")     
      );
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfRapport_premiere_version(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfRapport_premiere_version(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireRapport_premiere_versionList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireRapport_premiere_versionListFromRemote(this.currentUser.id).subscribe(   
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
        //alert('Cette opération a été effectuée avec succès');
        this.getCommentaireRapport_premiere_versionList();
      },
      () => console.log("Error")     
    );
  }

  goToEditCommentaireRapport_premiere_version(id : number){
    console.log("id "+id);
    this._router.navigate(['/editCommentaireRapport_premiere_version', id]);
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

}
