import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';

@Component({
  selector: 'app-list-file-depot-convention-de-stage-pour-admin',
  templateUrl:'./list-file-depot-convention-de-stage-pour-admin.component.html',
  styleUrls: ['./list-file-depot-convention-de-stage-pour-admin.component.css']
})
export class ListFileDepotConventionDeStagePourAdminComponent implements OnInit {

  etudiant_id : any;

  etudiant_email : any;

  depot_id : any;

  fileList?: FileData[];

  depotConvention_de_stage = new Depot();

  etatConvention_de_stage = false;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private _router: Router, private activatedRoute : ActivatedRoute, private https: HttpClient) { }

  ngOnInit(): void {
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('etudiant_id');
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('etudiant_email');
    this.depot_id = this.activatedRoute.snapshot.paramMap.get('depot_id');
    this.getFileConvention_de_stageList();
    this.loadDetailsDepotConvention_de_stage();
    this.testerEtatConvention_de_stage();
  }

  loadDetailsDepotConvention_de_stage() {
    this.depotService.fetchDetailsDepotConvention_de_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotConvention_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatConvention_de_stage() {
    this.depotService.existeConvention_de_stage(this.etudiant_id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   
            
        if(dataExisteConvention_de_stage == true){
            
          this.depotService.etatConvention_de_stage(this.etudiant_id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 2){
                this.etatConvention_de_stage = true;
              }
            },
          error => console.log("Exception Occured")        
          );
        }  
      },
    error => console.log("Exception Occured")        
    );       
  } 

  getFileConvention_de_stageList(): void {
    this.depotService.listFileDepotConvention_de_stage(this.etudiant_email).subscribe(result => {
      this.fileList = result;
    });
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfConvention_de_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  
  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfConvention_de_stage(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  accepterDepotConventionDeStage(){
    
    this.depotService.accepterDepotConventionDeStage(this.depot_id).subscribe(
      () => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['listDepotConventionDeStageDEPOSEEPourAdmin']);
        this.emailSenderConventionDeStageAcceptee(this.depot_id);
      },
      () => console.log("Error")     
    );
  }

  refuserDepotConventionDeStage(){
    
    this.depotService.refuserDepotConventionDeStage(this.depot_id).subscribe (
      () => {
        console.log("Data add succesfully");
        alert('Cette opération a été effectuée avec succès');
        this._router.navigate(['listDepotConventionDeStageDEPOSEEPourAdmin']);
        this.emailSenderConventionDeStageRefusee(this.depot_id);
      },
      () => console.log("Error")     
    );
  }

  emailSenderConventionDeStageAcceptee(idDepot : number) {
    this.https.get<any>('http://localhost:8081/emailSender/getdetailsDepotConventionAccepteeToStudent/'+idDepot).subscribe(
      res => {
        console.log(idDepot);
        //alert('Email Sent successfully');
      });
  }

  emailSenderConventionDeStageRefusee(idDepot : number) {
    this.https.get<any>('http://localhost:8081/emailSender/getdetailsDepotConventionRefuseeToStudent/'+idDepot).subscribe(
      res => {
        console.log(idDepot);
        //alert('Email Sent successfully');
      });
  }

  goToListDepotConventionDeStageDEPOSEEPourAdmin() {
    this._router.navigate(['/listDepotConventionDeStageDEPOSEEPourAdmin']);
  }

}
