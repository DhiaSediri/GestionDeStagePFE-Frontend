import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { saveAs } from 'file-saver';
import { User } from '../_models/user';
import { CommentaireService } from '../_services/commentaire.service';
import { Commentaire } from '../_models/commentaire';

@Component({
  selector: 'app-depot-rapport-version-finale',
  templateUrl: './depot-rapport-version-finale.component.html',
  styleUrls: ['./depot-rapport-version-finale.component.css']
})
export class DepotRapportVersionFinaleComponent implements OnInit {

  currentUser: any;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  depotRapport_version_finale = new Depot();

  etatRapport_version_finale = false;

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

        this.depotService.uploadFileDepotRapport_version_finale(this.currentFile, this.currentUser.email).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              console.log(Math.round(100 * event.loaded / event.total));
              this._router.navigate(['/depotRapport_version_finale']);

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

    this.depotService.addDepotRapport_version_finaleToRemote(this.currentUser.id).subscribe(
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

  emailSenderUploadDepotToEncadrant(depotRapport_version_finale: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsUploadDepotToEncadrant', depotRapport_version_finale).subscribe(
      res => {
        console.log(depotRapport_version_finale);
        alert('Email Sent successfully');
      });
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getFileList();
    this.getCommentaireRapport_version_finaleList();
    this.loadDetailsDepotRapport_version_finale();
    this.testerEtatRapport_version_finale();
  }

  loadDetailsDepotRapport_version_finale() {
    this.depotService.fetchDetailsDepotRapport_version_finaleByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotRapport_version_finale = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatRapport_version_finale() {
    this.depotService.existeRapport_version_finale(this.currentUser.id).subscribe(
      dataExisteRapport_version_finale => {
        console.log(dataExisteRapport_version_finale);   
            
        if(dataExisteRapport_version_finale == true){
            
          this.depotService.etatRapport_version_finale(this.currentUser.id).subscribe(
            dataEtatRapport_version_finale => {
              console.log(dataEtatRapport_version_finale); 

              if(dataEtatRapport_version_finale == 2){
                this.etatRapport_version_finale = true;
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
    this.depotService.listFileDepotRapport_version_finale(this.currentUser.email).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {

    this.depotService.deleteFileDepotRapport_version_finale(fileData.filename, this.currentUser.email).subscribe(
      blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['/depotRapport_version_finale']);

      this.depotService.deleteDepotRapport_version_finaleByEtudiantIdFromRemote(this.currentUser.id).subscribe(
        () => console.log("Data deleted succesfully"),
        () => console.log("Error")     
      );
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfRapport_version_finale(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfRapport_version_finale(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireRapport_version_finaleList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireRapport_version_finaleListFromRemote(this.currentUser.id).subscribe(   
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

}
