import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileData } from '../_models/file-data';
import { DeleteFileService } from '../_services/delete-file.service';
import { UploadFileService } from '../_services/upload-file.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { OffreDeStage } from '../_models/offre-de-stage';

@Component({
  selector: 'app-upload-offres-de-stage',
  templateUrl: './upload-offres-de-stage.component.html',
  styleUrls: ['./upload-offres-de-stage.component.css']
})
export class UploadOffresDeStageComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  offreDeStage = new OffreDeStage;

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

        this.uploadService.uploadFileOffresDeStage(this.currentFile, this.offreDeStage.societe, this.offreDeStage.session, this.offreDeStage.option).subscribe(
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

    this.uploadService.addOffreDeStageToRemote(this.offreDeStage).subscribe(
      () => console.log("Data add succesfully"),
      () => console.log("Error")     
    );

    this._router.navigate(['/listOffresDeStagePourAdmin']);
  }

  ngOnInit(): void {
    this.getFileList();
  }

  getFileList(): void {
    this.deleteFileService.listFileOffresDeStage(this.offreDeStage.societe, this.offreDeStage.session, this.offreDeStage.option).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.deleteFileService
      .deleteFileOffresDeStage(fileData.filename, this.offreDeStage.societe, this.offreDeStage.session, this.offreDeStage.option)
      .subscribe(blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['uploadOffresDeStage']);
  }

  getFile(fileData: FileData) {
    this.deleteFileService.getPdfOffresDeStage(fileData.filename, this.offreDeStage.societe, this.offreDeStage.session, this.offreDeStage.option).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  
  getFileInNewWindow(fileData: FileData) {
    this.deleteFileService.getPdfOffresDeStage(fileData.filename, this.offreDeStage.societe, this.offreDeStage.session, this.offreDeStage.option).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
