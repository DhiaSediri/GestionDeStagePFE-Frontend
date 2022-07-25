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

  etudiant_email : any;

  depot_id : any;

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private _router: Router, private activatedRoute : ActivatedRoute, private https: HttpClient) { }

  ngOnInit(): void {
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('etudiant_email');
    this.depot_id = this.activatedRoute.snapshot.paramMap.get('depot_id');
    this.getFileConvention_de_stageList();
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
        this._router.navigate(['listDepotConventionDeStageDEPOSEEPourAdmin']);
        this.emailSenderConventionDeStageRefusee(this.depot_id);
      },
      () => console.log("Error")     
    );
  }

  emailSenderConventionDeStageAcceptee(idDepot : number) {
    this.https.post<number>('http://localhost:8081/emailSender/getdetailsDemandeDeStageAcceptee', idDepot).subscribe(
      res => {
        console.log(idDepot);
        alert('Email Sent successfully');
      });
  }

  emailSenderConventionDeStageRefusee(idDepot : number) {
    this.https.post<number>('http://localhost:8081/emailSender/getdetailsDemandeDeStageRefusee', idDepot).subscribe(
      res => {
        console.log(idDepot);
        alert('Email Sent successfully');
      });
  }

  goToListDepotConventionDeStageDEPOSEEPourAdmin() {
    this._router.navigate(['/listDepotConventionDeStageDEPOSEEPourAdmin']);
  }

}
