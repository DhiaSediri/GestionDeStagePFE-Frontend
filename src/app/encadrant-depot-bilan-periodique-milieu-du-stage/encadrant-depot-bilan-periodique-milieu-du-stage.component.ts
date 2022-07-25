import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';

@Component({
  selector: 'app-encadrant-depot-bilan-periodique-milieu-du-stage',
  templateUrl: './encadrant-depot-bilan-periodique-milieu-du-stage.component.html',
  styleUrls: ['./encadrant-depot-bilan-periodique-milieu-du-stage.component.css']
})
export class EncadrantDepotBilanPeriodiqueMilieuDuStageComponent implements OnInit {

  etudiant_email : any;

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');
    this.getFileList();
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

}
