import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';

@Component({
  selector: 'app-encadrant-depot-rapport-premiere-version',
  templateUrl: './encadrant-depot-rapport-premiere-version.component.html',
  styleUrls: ['./encadrant-depot-rapport-premiere-version.component.css']
})
export class EncadrantDepotRapportPremiereVersionComponent implements OnInit {

  etudiant_email : any;

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.getFileList();
  }

  getFileList(): void {
    this.depotService.listFileDepotRapport_premiere_version(this.etudiant_email).subscribe(result => {
      this.fileList = result;
    });
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfRapport_premiere_version(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfRapport_premiere_version(fileData.filename, this.etudiant_email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
