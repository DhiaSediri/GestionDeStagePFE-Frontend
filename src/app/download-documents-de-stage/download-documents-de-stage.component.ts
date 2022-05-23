import { Component, OnInit } from '@angular/core';
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

  getFile() {
    this.downloadService.getPdfDocumentsDeStage(fileData.filename, this.myParam).subscribe((responseMessage) => {
    let file = new Blob([responseMessage], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow() {
    this.downloadService.getPdfDocumentsDeStage(this.fileName, this.fileType).subscribe((responseMessage) => {
    let file = new Blob([responseMessage], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })   
  }

}
