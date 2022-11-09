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
  selector: 'app-encadrant-depot-bilan-periodique-milieu-du-stage',
  templateUrl: './encadrant-depot-bilan-periodique-milieu-du-stage.component.html',
  styleUrls: ['./encadrant-depot-bilan-periodique-milieu-du-stage.component.css']
})
export class EncadrantDepotBilanPeriodiqueMilieuDuStageComponent implements OnInit {

  currentUser: any;

  etudiant_email : any;

  etudiant_id : any;

  fileList?: FileData[];

  _commentairelist : Commentaire[]=[];

  commentaire = new Commentaire();

  depotBilan_periodique_milieu_du_stage = new Depot();

  etatBilan_periodique_milieu_du_stage = false;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute, private https: HttpClient, private _router: Router, private commentaireService:CommentaireService, private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFileList();
    this.getCommentaireBilan_periodique_milieu_du_stageList();
    this.loadDetailsDepotBilan_periodique_milieu_du_stage();
    this.testerEtatBilan_periodique_milieu_du_stage();
  }

  loadDetailsDepotBilan_periodique_milieu_du_stage() {
    this.depotService.fetchDetailsDepotBilan_périodique_milieu_du_stageByEtudiantIdFromRemote( this.etudiant_id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotBilan_periodique_milieu_du_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatBilan_periodique_milieu_du_stage() {
    this.depotService.existeBilan_périodique_milieu_du_stage( this.etudiant_id).subscribe(
      dataExisteBilan_periodique_milieu_du_stage => {
        console.log(dataExisteBilan_periodique_milieu_du_stage);   
            
        if(dataExisteBilan_periodique_milieu_du_stage == true){
            
          this.depotService.etatBilan_périodique_milieu_du_stage( this.etudiant_id).subscribe(
            dataEtatBilan_periodique_milieu_du_stage => {
              console.log(dataEtatBilan_periodique_milieu_du_stage); 

              if(dataEtatBilan_periodique_milieu_du_stage == 2){
                this.etatBilan_periodique_milieu_du_stage = true;
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
    this.depotService.listFileDepotBilan_périodique_milieu_du_stage(this.etudiant_email).subscribe(result => {
      this.fileList = result;
    });
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfBilan_périodique_milieu_du_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfBilan_périodique_milieu_du_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  getCommentaireBilan_periodique_milieu_du_stageList(): void {
    this._commentairelist=[];
    this.commentaireService.fetchCommentaireBilan_periodique_milieu_du_stageListFromRemote(this.etudiant_id).subscribe(   
      (data: Commentaire[]) => {
        console.log("Response Recieved");
        this._commentairelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  addCommentaireBilan_periodique_milieu_du_stageFormSubmit(){ 
    this.commentaireService.addCommentaireBilan_periodique_milieu_du_stageToRemote(this.currentUser.id, this.commentaire.contenu).subscribe(
      () => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/depotBilan_periodique_milieu_du_stage']);
      },
      () => console.log("Error")     
    );
  }

  goToEditCommentaireBilan_periodique_milieu_du_stage(commentaire_id : number, etudiant_email: string, etudiant_id: number){
    console.log("commentaire_id "+commentaire_id);
    this._router.navigate(['/encadrantEditCommentaireBilan_periodique_fin_du_stage', commentaire_id, etudiant_email, etudiant_id]);
  }

  deleteCommentaireBilan_periodique_milieu_du_stage(commentaire_id : number, etudiant_email: string, etudiant_id: number){
    this.commentaireService.deleteCommentaireByIdFromRemote(commentaire_id).subscribe(
      () => {
        console.debug("Deleted Successfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['/depotBilan_periodique_milieu_du_stage', etudiant_email, etudiant_id]);
      },
      () => {
        console.log("Exception Occured");
      }
    );
  }

  emailSenderConfirmationTraitementDepotToStudent(depotBilan_périodique_milieu_du_stage: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsConfirmationTraitementDepotToStudent', depotBilan_périodique_milieu_du_stage).subscribe(
      res => {
        console.log(depotBilan_périodique_milieu_du_stage);
        //alert('Email Sent successfully');
      });
  }

  traitementDepot() {
    this.depotService.declarerTraitementDepotBilan_périodique_milieu_du_stage(this.etudiant_id).subscribe(
      data => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this.emailSenderConfirmationTraitementDepotToStudent(data);
      },
      error => console.log("Exception Occured")        
    );
  }

}
