import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Depot } from '../_models/depot';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';

@Component({
  selector: 'app-encadrant-depot-convention-de-stage',
  templateUrl: './encadrant-depot-convention-de-stage.component.html',
  styleUrls: ['./encadrant-depot-convention-de-stage.component.css']
})
export class EncadrantDepotConventionDeStageComponent implements OnInit {

  etudiant_email : any;

  etudiant_id : any;

  fileList?: FileData[];

  depotConvention_de_stage = new Depot();

  etatConvention_de_stage = false;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getFileList();
    this.loadDetailsDepotConvention_de_stage();
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

  getFileList(): void {
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

}
