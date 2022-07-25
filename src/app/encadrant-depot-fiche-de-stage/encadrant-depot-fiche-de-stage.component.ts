import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Depot } from '../_models/depot';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-encadrant-depot-fiche-de-stage',
  templateUrl: './encadrant-depot-fiche-de-stage.component.html',
  styleUrls: ['./encadrant-depot-fiche-de-stage.component.css']
})
export class EncadrantDepotFicheDeStageComponent implements OnInit {

  etudiant_email : any;

  etudiant_id : any;

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private token: TokenStorageService, private activatedRoute : ActivatedRoute, private https: HttpClient) {}

  ngOnInit(): void {
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFileList();
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

  emailSenderConfirmationTraitementDepotToStudent(depotFiche_de_stage: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsConfirmationTraitementDepotToStudent', depotFiche_de_stage).subscribe(
      res => {
        console.log(depotFiche_de_stage);
        alert('Email Sent successfully');
      });
  }

  traitementDepot() {
    this.depotService.declarerTraitementDepotFiche_de_stage(this.etudiant_id).subscribe(
      data => {
        console.log("Data add succesfully");
        this.emailSenderConfirmationTraitementDepotToStudent(data);
      },
      error => console.log("Exception Occured")        
    );
  }

}
