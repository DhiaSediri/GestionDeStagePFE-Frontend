import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-depot-convention-de-stage',
  templateUrl: './depot-convention-de-stage.component.html',
  styleUrls: ['./depot-convention-de-stage.component.css']
})
export class DepotConventionDeStageComponent implements OnInit {

  currentUser: any;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  constructor(private depotService: DepotService, private _router: Router, private token: TokenStorageService) {
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

        this.depotService.uploadFileDepot(this.currentFile, this.currentUser.email).subscribe(
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

    const depot = new Depot();
    this.depotService.addDepotConvention_de_stageToRemote(depot);
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getFileList();
  }

  getFileList(): void {
    this.depotService.listFileDepotEtudiant(this.currentUser.email).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.depotService
      
    .deleteFileDepot(fileData.filename, this.currentUser.email)
      .subscribe(blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['Convention_de_stage']);

      //this.depotService.deleteDepotByIdFromRemote(id);
  }

}
