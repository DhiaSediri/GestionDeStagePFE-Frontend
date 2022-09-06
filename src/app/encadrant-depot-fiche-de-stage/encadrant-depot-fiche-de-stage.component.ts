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
  selector: 'app-encadrant-depot-fiche-de-stage',
  templateUrl: './encadrant-depot-fiche-de-stage.component.html',
  styleUrls: ['./encadrant-depot-fiche-de-stage.component.css']
})
export class EncadrantDepotFicheDeStageComponent implements OnInit {

  currentUser: any;

  etudiant_email : any;

  etudiant_id : any;

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  depotFiche_de_stage = new Depot();

  etatFiche_de_stage = false;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute, private https: HttpClient, private _router: Router, private commentaireService:CommentaireService, private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFileList();
    this.getCommentaireFiche_de_stageList();
    this.loadDetailsDepotFiche_de_stage();
    this.testerEtatFiche_de_stage();
  }

  loadDetailsDepotFiche_de_stage() {
    this.depotService.fetchDetailsDepotFiche_de_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotFiche_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatFiche_de_stage() {
    this.depotService.existeFiche_de_stage(this.etudiant_id).subscribe(
      dataExisteFiche_de_stage => {
        console.log(dataExisteFiche_de_stage);   
            
        if(dataExisteFiche_de_stage == true){
            
          this.depotService.etatFiche_de_stage(this.etudiant_id).subscribe(
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
    this.depotService.listFileDepotFiche_de_stage(this.etudiant_email).subscribe(result => {
      this.fileList = result;
    });
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfFiche_de_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  
  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfFiche_de_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireFiche_de_stageList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireFiche_de_stageListFromRemote(this.etudiant_id).subscribe(   
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

  goToEditCommentaireFiche_de_stage(commentaire_id : number, etudiant_email: string, etudiant_id: number){
    console.log("commentaire_id "+commentaire_id);
    this._router.navigate(['/encadrantEditCommentaireFiche_de_stage', commentaire_id, etudiant_email, etudiant_id]);
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

  emailSenderConfirmationTraitementDepotToStudent(depotFiche_de_stage: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsConfirmationTraitementDepotToStudent', depotFiche_de_stage).subscribe(
      res => {
        console.log(depotFiche_de_stage);
        //alert('Email Sent successfully');
      });
  }

  traitementDepot() {
    this.depotService.declarerTraitementDepotFiche_de_stage(this.etudiant_id).subscribe(
      data => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this.emailSenderConfirmationTraitementDepotToStudent(data);
      },
      error => console.log("Exception Occured")        
    );
  }

}
