import { Component, OnInit } from '@angular/core';
import { FileData } from '../_models/file-data';
import { DownloadFileService } from '../_services/download-file.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-documents-de-stage',
  templateUrl: './download-documents-de-stage.component.html',
  styleUrls: ['./download-documents-de-stage.component.css']
})
export class DownloadDocumentsDeStageComponent implements OnInit {

  fileList?: FileData[];

  constructor(private downloadService: DownloadFileService) {
  }

  ngOnInit(): void {
    this.getFileList();
  }

  getFileList(): void {
    this.downloadService.list().subscribe(result => {
      this.fileList = result;
    });
  }

  downloadFile(fileData: FileData): void {
    this.downloadService
      .download(fileData.filename)
      .subscribe(blob => saveAs(blob, fileData.filename));
  }

}
