import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileData } from '../_models/file-data';
import { DeleteFileService } from '../_services/delete-file.service';
import { saveAs } from 'file-saver';
import { UploadFileService } from '../_services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RapportDeStage } from '../_models/rapport-de-stage';

@Component({
  selector: 'app-upload-rapports-de-stage',
  templateUrl: './upload-rapports-de-stage.component.html',
  styleUrls: ['./upload-rapports-de-stage.component.css']
})
export class UploadRapportsDeStageComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  rapportDeStage =  new RapportDeStage;

  constructor(private uploadService: UploadFileService, private deleteFileService: DeleteFileService, private _router: Router) {
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

        this.uploadService.uploadFileRapportsDeStage(this.currentFile, this.rapportDeStage.session, this.rapportDeStage.option, this.rapportDeStage.encadrant).subscribe(
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

    this.uploadService.addRapportDeStageToRemote(this.rapportDeStage).subscribe(
      () => console.log("Data add succesfully"),
      () => console.log("Error")     
    );

    this._router.navigate(['/listRapportsDeStagePourAdmin']);
  }

  ngOnInit(): void {
    this.getFileList();
  }

  getFileList(): void {
    this.deleteFileService.listFileRapportsDeStage(this.rapportDeStage.session, this.rapportDeStage.option, this.rapportDeStage.encadrant).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.deleteFileService
      .deleteFileRapportsDeStage(fileData.filename, this.rapportDeStage.session, this.rapportDeStage.option, this.rapportDeStage.encadrant)
      .subscribe(blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['uploadRapportsDeStage']);
  }

  getFile(fileData: FileData) {
    this.deleteFileService.getPdfRapportsDeStage(fileData.filename, this.rapportDeStage.session, this.rapportDeStage.option, this.rapportDeStage.encadrant).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  
  getFileInNewWindow(fileData: FileData) {
    this.deleteFileService.getPdfRapportsDeStage(fileData.filename, this.rapportDeStage.session, this.rapportDeStage.option, this.rapportDeStage.encadrant).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
