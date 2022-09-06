import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { saveAs } from 'file-saver';
import { DownloadFileService } from '../_services/download-file.service';

@Component({
  selector: 'app-rendez-vous-de-stage-pour-admin',
  templateUrl: './rendez-vous-de-stage-pour-admin.component.html',
  styleUrls: ['./rendez-vous-de-stage-pour-admin.component.css']
})
export class RendezVousDeStagePourAdminComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private downloadFileService: DownloadFileService, private _router: Router) {
  }
  

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.downloadFileService.uploadFileRendezVousDeStage(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              console.log(Math.round(100 * event.loaded / event.total));

            } else if (event instanceof HttpResponse) {
              this.message = event.body.responseMessage;
            }
          },
          (err: any) => {
            console.log(err);

            if (err.error && err.error.responseMessage) {
              this.errorMsg = err.error.responseMessage;
            } else {
              this.errorMsg = 'Error occurred while uploading a file!';
            }

            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }

  ngOnInit(): void {
    this.getFileList();
  }

  getFileList(): void {
    this.downloadFileService.listFilesRendezVousDeStage().subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.downloadFileService.deleteFileRendezVousDeStage(fileData.filename).subscribe(blob => saveAs(blob, fileData.filename));
      alert('Cette opération a été effectuée avec succès');
      this._router.navigate(['rendez-vousDeStagePourAdmin']);
  }

  getFile(fileData: FileData) {
    this.downloadFileService.getPdfRendezVousDeStage(fileData.filename).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.downloadFileService.getPdfRendezVousDeStage(fileData.filename).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
