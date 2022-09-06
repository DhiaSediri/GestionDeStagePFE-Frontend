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
  selector: 'app-depot-fiche-de-stage',
  templateUrl: './depot-fiche-de-stage.component.html',
  styleUrls: ['./depot-fiche-de-stage.component.css']
})
export class DepotFicheDeStageComponent implements OnInit {

  currentUser: any;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  depotFiche_de_stage = new Depot();

  etatFiche_de_stage = false;

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

        this.depotService.uploadFileDepotFiche_de_stage(this.currentFile, this.currentUser.email).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              //console.log(Math.round(100 * event.loaded / event.total));
              this.depotService.addDepotFiche_de_stageToRemote(this.currentUser.id).subscribe(
                (resultat) => {
                  console.log("Data add succesfully");
                  const etudiant = new User();
                  etudiant.id = this.currentUser.id;
                  resultat.user = etudiant;
                  this.emailSenderUploadDepotToEncadrant(resultat);
                  this._router.navigate(['/depotFiche_de_stage']);
                },
                () => console.log("Error")     
              );

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

  }

  emailSenderUploadDepotToEncadrant(depotFiche_de_stage: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsUploadDepotToEncadrant', depotFiche_de_stage).subscribe(
      res => {
        console.log(depotFiche_de_stage);
        //alert('E-mail envoyé avec succès');
      });
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getFileList();
    this.getCommentaireFiche_de_stageList();
    this.loadDetailsDepotFiche_de_stage();
    this.testerEtatFiche_de_stage();
  }

  loadDetailsDepotFiche_de_stage() {
    this.depotService.fetchDetailsDepotFiche_de_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotFiche_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatFiche_de_stage() {
    this.depotService.existeFiche_de_stage(this.currentUser.id).subscribe(
      dataExisteFiche_de_stage => {
        console.log(dataExisteFiche_de_stage);   
            
        if(dataExisteFiche_de_stage == true){
            
          this.depotService.etatFiche_de_stage(this.currentUser.id).subscribe(
            dataEtatFiche_de_stage => {
              console.log(dataEtatFiche_de_stage); 

              if(dataEtatFiche_de_stage == 2){
                this.etatFiche_de_stage = true;
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
    this.depotService.listFileDepotFiche_de_stage(this.currentUser.email).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {

    this.depotService.deleteFileDepotFiche_de_stage(fileData.filename, this.currentUser.email).subscribe(
      blob => saveAs(blob, fileData.filename));
      alert('Cette opération a été effectuée avec succès');
      this._router.navigate(['/depotFiche_de_stage']);

      this.depotService.deleteDepotFiche_de_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
        () => console.log("Data deleted succesfully"),
        () => console.log("Error")     
      );
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfFiche_de_stage(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfFiche_de_stage(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireFiche_de_stageList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireFiche_de_stageListFromRemote(this.currentUser.id).subscribe(   
      (data: Commentaire[]) => {
        console.log("Response Recieved");
        this._commentairelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  addCommentaireFiche_de_stageFormSubmit(){ 
    this.commentaireService.addCommentaireFiche_de_stageToRemote(this.currentUser.id, this.commentaire.contenu).subscribe(
      () => {
        console.log("Data add succesfully");
        //alert('Cette opération a été effectuée avec succès');
        this.getCommentaireFiche_de_stageList();
      },
      () => console.log("Error")     
    );
  }

  goToEditCommentaireFiche_de_stage(id : number){
    console.log("id "+id);
    this._router.navigate(['/editCommentaireFiche_de_stage', id]);
  }

  deleteCommentaireFiche_de_stage(id : number){
    this.commentaireService.deleteCommentaireByIdFromRemote(id).subscribe(
      () => {
        console.debug("Deleted Successfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/depotFiche_de_stage']);
      },
      () => {
        console.log("Exception Occured");
      }
    );
  }

}
