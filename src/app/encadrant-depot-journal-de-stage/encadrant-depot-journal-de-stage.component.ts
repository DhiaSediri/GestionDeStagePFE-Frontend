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
  selector: 'app-encadrant-depot-journal-de-stage',
  templateUrl: './encadrant-depot-journal-de-stage.component.html',
  styleUrls: ['./encadrant-depot-journal-de-stage.component.css']
})
export class EncadrantDepotJournalDeStageComponent implements OnInit {

  currentUser: any;

  etudiant_email : any;

  etudiant_id : any;

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  depotJournal_de_stage = new Depot();

  etatJournal_de_stage = false;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute, private https: HttpClient, private _router: Router, private commentaireService:CommentaireService, private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFileList();
    this.getCommentaireJournal_de_stageList();
    this.loadDetailsDepotJournal_de_stage();
    this.testerEtatJournal_de_stage();
  }

  loadDetailsDepotJournal_de_stage() {
    this.depotService.fetchDetailsDepotJournal_de_stageByEtudiantIdFromRemote( this.etudiant_id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotJournal_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatJournal_de_stage() {
    this.depotService.existeJournal_de_stage( this.etudiant_id).subscribe(
      dataExisteJournal_de_stage => {
        console.log(dataExisteJournal_de_stage);   
            
        if(dataExisteJournal_de_stage == true){
            
          this.depotService.etatJournal_de_stage( this.etudiant_id).subscribe(
            dataEtatJournal_de_stage => {
              console.log(dataEtatJournal_de_stage); 

              if(dataEtatJournal_de_stage == 2){
                this.etatJournal_de_stage = true;
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
    this.depotService.listFileDepotJournal_de_stage(this.etudiant_email).subscribe(result => {
      this.fileList = result;
    });
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfJournal_de_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfJournal_de_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireJournal_de_stageList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireJournal_de_stageListFromRemote(this.etudiant_id).subscribe(   
      (data: Commentaire[]) => {
        console.log("Response Recieved");
        this._commentairelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  addCommentaireJournal_de_stageFormSubmit(){ 
    this.commentaireService.addCommentaireJournal_de_stageToRemote(this.currentUser.id, this.commentaire.contenu).subscribe(
      () => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/depotJournal_de_stage']);
      },
      () => console.log("Error")     
    );
  }

  goToEditCommentaireJournal_de_stage(commentaire_id : number, etudiant_email: string, etudiant_id: number){
    console.log("commentaire_id "+commentaire_id);
    this._router.navigate(['/encadrantEditCommentaireJournal_de_stage', commentaire_id, etudiant_email, etudiant_id]);
  }

  deleteCommentaireJournal_de_stage(commentaire_id : number, etudiant_email: string, etudiant_id: number){
    this.commentaireService.deleteCommentaireByIdFromRemote(commentaire_id).subscribe(
      () => {
        console.debug("Deleted Successfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/encadrantDepotJournal_de_stage', etudiant_email, etudiant_id]);
      },
      () => {
        console.log("Exception Occured");
      }
    );
  }

  emailSenderConfirmationTraitementDepotToStudent(depotJournal_de_stage: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsConfirmationTraitementDepotToStudent', depotJournal_de_stage).subscribe(
      res => {
        console.log(depotJournal_de_stage);
        //alert('Email Sent successfully');
      });
  }

  traitementDepot() {
    this.depotService.declarerTraitementDepotJournal_de_stage(this.etudiant_id).subscribe(
      data => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this.emailSenderConfirmationTraitementDepotToStudent(data);
      },
      error => console.log("Exception Occured")        
    );
  }

}
