import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileData } from '../_models/file-data';
import { saveAs } from 'file-saver';
import { DownloadFileService } from '../_services/download-file.service';

@Component({
  selector: 'app-rendez-vous-de-stage',
  templateUrl: './rendez-vous-de-stage.component.html',
  styleUrls: ['./rendez-vous-de-stage.component.css']
})
export class RendezVousDeStageComponent implements OnInit {

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private downloadService: DownloadFileService) {
  }

  ngOnInit(): void {
    this.getFileList();
  }

  getFileList(): void {
    this.downloadService.listFilesRendezVousDeStage().subscribe(result => {
      this.fileList = result;
    });
  }

  downloadFilesRendezVousDeStage(fileData: FileData): void {
    this.downloadService
      .downloadFilesRendezVousDeStage(fileData.filename)
      .subscribe(blob => saveAs(blob, fileData.filename));
  }

  getFile(fileData: FileData) {
    this.downloadService.getPdfRendezVousDeStage(fileData.filename).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.downloadService.getPdfRendezVousDeStage(fileData.filename).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
