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
  selector: 'app-encadrant-depot-bilan-periodique-debut-du-stage',
  templateUrl: './encadrant-depot-bilan-periodique-debut-du-stage.component.html',
  styleUrls: ['./encadrant-depot-bilan-periodique-debut-du-stage.component.css']
})
export class EncadrantDepotBilanPeriodiqueDebutDuStageComponent implements OnInit {

  currentUser: any;

  etudiant_email : any;

  etudiant_id : any;

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  depotBilan_periodique_debut_du_stage = new Depot();

  etatBilan_periodique_debut_du_stage = false;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute, private https: HttpClient, private _router: Router, private commentaireService:CommentaireService, private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFileList();
    this.getCommentaireBilan_periodique_debut_du_stageList();
    this.loadDetailsDepotBilan_periodique_debut_du_stage();
    this.testerEtatBilan_periodique_debut_du_stage();
  }

  loadDetailsDepotBilan_periodique_debut_du_stage() {
    this.depotService.fetchDetailsDepotBilan_périodique_début_du_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotBilan_periodique_debut_du_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatBilan_periodique_debut_du_stage() {
    this.depotService.existeBilan_périodique_début_du_stage(this.etudiant_id).subscribe(
      dataExisteBilan_periodique_debut_du_stage => {
        console.log(dataExisteBilan_periodique_debut_du_stage);   
            
        if(dataExisteBilan_periodique_debut_du_stage == true){
            
          this.depotService.etatBilan_périodique_début_du_stage(this.etudiant_id).subscribe(
            dataEtatBilan_periodique_debut_du_stage => {
              console.log(dataEtatBilan_periodique_debut_du_stage); 

              if(dataEtatBilan_periodique_debut_du_stage == 2){
                this.etatBilan_periodique_debut_du_stage = true;
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
    this.depotService.listFileDepotBilan_périodique_debut_du_stage(this.etudiant_email).subscribe(result => {
      this.fileList = result;
    });
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfBilan_périodique_début_du_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfBilan_périodique_début_du_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireBilan_periodique_debut_du_stageList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireBilan_periodique_debut_du_stageFromRemote(this.etudiant_id).subscribe(   
      (data: Commentaire[]) => {
        console.log("Response Recieved");
        this._commentairelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  addCommentaireBilan_periodique_debut_du_stageFormSubmit(){ 
    this.commentaireService.addCommentaireBilan_periodique_debut_du_stageToRemote(this.currentUser.id, this.commentaire.contenu).subscribe(
      () => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/depotBilan_periodique_debut_du_stage']);
      },
      () => console.log("Error")     
    );
  }

  goToEditCommentaireBilan_periodique_debut_du_stage(id : number){
    console.log("id "+id);
    this._router.navigate(['/editCommentaireBilan_periodique_debut_du_stage', id]);
  }

  deleteCommentaireBilan_periodique_debut_du_stage(id : number){
    this.commentaireService.deleteCommentaireByIdFromRemote(id).subscribe(
      () => {
        console.debug("Deleted Successfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/depotBilan_periodique_debut_du_stage']);
      },
      () => {
        console.log("Exception Occured");
      }
    );
  }

  emailSenderConfirmationTraitementDepotToStudent(depotBilan_périodique_début_du_stage: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsConfirmationTraitementDepotToStudent', depotBilan_périodique_début_du_stage).subscribe(
      res => {
        console.log(depotBilan_périodique_début_du_stage);
        //alert('Email Sent successfully');
      });
  }

  traitementDepot() {
    this.depotService.declarerTraitementDepotBilan_périodique_début_du_stage(this.etudiant_id).subscribe(
      data => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this.emailSenderConfirmationTraitementDepotToStudent(data);
      },
      error => console.log("Exception Occured")        
    );
  }

}
