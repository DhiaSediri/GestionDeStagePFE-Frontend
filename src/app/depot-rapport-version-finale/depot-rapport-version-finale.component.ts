import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { saveAs } from 'file-saver';
import { User } from '../_models/user';

@Component({
  selector: 'app-depot-rapport-version-finale',
  templateUrl: './depot-rapport-version-finale.component.html',
  styleUrls: ['./depot-rapport-version-finale.component.css']
})
export class DepotRapportVersionFinaleComponent implements OnInit {

  currentUser: any;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private depotService: DepotService, private _router: Router, private token: TokenStorageService, private https: HttpClient) {
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

        this.depotService.uploadFileDepotRapport_version_finale(this.currentFile, this.currentUser.email).subscribe(
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

    this.depotService.addDepotRapport_version_finaleToRemote(this.currentUser.id).subscribe(
      (resultat) => {
        console.log("Data add succesfully");
        const etudiant = new User();
        etudiant.id = this.currentUser.id;
        resultat.user = etudiant;
        this.emailSenderUploadDepotToEncadrant(resultat);
      },
      () => console.log("Error")     
    );
  }

  emailSenderUploadDepotToEncadrant(depotRapport_version_finale: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsUploadDepotToEncadrant', depotRapport_version_finale).subscribe(
      res => {
        console.log(depotRapport_version_finale);
        alert('Email Sent successfully');
      });
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getFileList();
  }

  getFileList(): void {
    this.depotService.listFileDepotRapport_version_finale(this.currentUser.email).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.depotService
      
    .deleteFileDepotRapport_version_finale(fileData.filename, this.currentUser.email)
      .subscribe(blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['Rapport_version_finale']);

      this.depotService.deleteDepotRapport_version_finaleByEtudiantIdFromRemote(this.currentUser.id).subscribe(
        () => console.log("Data deleted succesfully"),
        () => console.log("Error")     
      );
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfRapport_version_finale(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfRapport_version_finale(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
