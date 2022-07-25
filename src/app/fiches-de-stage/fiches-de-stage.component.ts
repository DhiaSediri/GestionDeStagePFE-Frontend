import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileData } from '../_models/file-data';
import { saveAs } from 'file-saver';
import { DownloadFileService } from '../_services/download-file.service';

@Component({
  selector: 'app-fiches-de-stage',
  templateUrl: './fiches-de-stage.component.html',
  styleUrls: ['./fiches-de-stage.component.css']
})
export class FichesDeStageComponent implements OnInit {

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private downloadService: DownloadFileService) {
  }

  ngOnInit(): void {
    this.getFileList();
  }

  getFileList(): void {
    this.downloadService.listFilesFichesDeStage().subscribe(result => {
      this.fileList = result;
    });
  }

  downloadFilesFichesDeStage(fileData: FileData): void {
    this.downloadService
      .downloadFilesFichesDeStage(fileData.filename)
      .subscribe(blob => saveAs(blob, fileData.filename));
  }

  getFile(fileData: FileData) {
    this.downloadService.getPdfFichesDeStage(fileData.filename).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.downloadService.getPdfFichesDeStage(fileData.filename).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
