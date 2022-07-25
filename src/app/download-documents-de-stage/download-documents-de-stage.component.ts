import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileData } from '../_models/file-data';
import { DownloadFileService } from '../_services/download-file.service';
import { saveAs } from 'file-saver';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-download-documents-de-stage',
  templateUrl: './download-documents-de-stage.component.html',
  styleUrls: ['./download-documents-de-stage.component.css']
})
export class DownloadDocumentsDeStageComponent implements OnInit {

  fileList?: FileData[];

  myParam?: string | null;

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private downloadService: DownloadFileService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params: ParamMap) =>  {

    this.myParam = params.get('folder');
    console.log(this.myParam);

    this.getFileList();
    });
  }

  getFileList(): void {
    console.log(this.myParam);
    this.downloadService.listDocumentsDeStage(this.myParam).subscribe(result => {
      this.fileList = result;
    });
  }

  downloadFile(fileData: FileData): void {
    this.downloadService
      .download(fileData.filename, this.myParam)
      .subscribe(blob => saveAs(blob, fileData.filename));
  }

  getFile(fileData: FileData) {
    this.downloadService.getPdfDocumentsDeStage(fileData.filename, this.myParam).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.downloadService.getPdfDocumentsDeStage(fileData.filename, this.myParam).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
