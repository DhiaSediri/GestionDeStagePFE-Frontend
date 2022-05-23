import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';

@Component({
  selector: 'app-depot-bilan-periodique-milieu-du-stage',
  templateUrl: './depot-bilan-periodique-milieu-du-stage.component.html',
  styleUrls: ['./depot-bilan-periodique-milieu-du-stage.component.css']
})
export class DepotBilanPeriodiqueMilieuDuStageComponent /*implements OnInit*/ {

  /*selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  constructor(private depotService: DepotService, private _router: Router) {
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

        this.depotService.uploadFileDepot(this.currentFile).subscribe(
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
    this.depotService.listFileDepotEtudiant().subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.depotService
      
    .deleteFileDepot(fileData.filename)
      .subscribe(Blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['uploadOffresDeStage']);
  }*/

}
