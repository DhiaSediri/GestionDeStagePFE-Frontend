import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileData } from '../_models/file-data';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { User } from '../_models/user';

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

  depotConvention_de_stage = new Depot();

  etatConvention_de_stage = false;

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

        this.depotService.uploadFileDepotConvention_de_stage(this.currentFile, this.currentUser.email).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              //console.log(Math.round(100 * event.loaded / event.total));
              this.depotService.addDepotConvention_de_stageToRemote(this.currentUser.id).subscribe(
                (resultat) => {
                  console.log("Data add succesfully");
                  const etudiant = new User();
                  etudiant.id = this.currentUser.id;
                  resultat.user = etudiant;
                  this.emailSenderUploadDepotConventionDeStageToAdmin(resultat);
                  this._router.navigate(['/depotConvention_de_stage']);
                },
                () => console.log("Error")     
              );
              
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

  emailSenderUploadDepotConventionDeStageToAdmin(depotConvention_de_stage: Depot) {
    this.https.post<Depot>('http://localhost:8081/emailSender/getdetailsUploadDepotConventionDeStageToAdmin', depotConvention_de_stage).subscribe(
      res => {
        console.log(depotConvention_de_stage);
        //alert('Email Sent successfully');
      });
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getFileList();
    this.loadDetailsDepotConvention_de_stage();
    this.testerEtatConvention_de_stage();
  }

  loadDetailsDepotConvention_de_stage() {
    this.depotService.fetchDetailsDepotConvention_de_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotConvention_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  testerEtatConvention_de_stage() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   
            
        if(dataExisteConvention_de_stage == true){
            
          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 2){
                this.etatConvention_de_stage = true;
              }
            },
          error => console.log("Exception Occured")        
          );
        }  
      },
    error => console.log("Exception Occured")        
    );       
  } 

  getFileList(): void {
    this.depotService.listFileDepotConvention_de_stage(this.currentUser.email).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {

    this.depotService.deleteFileDepotConvention_de_stage(fileData.filename, this.currentUser.email).subscribe(
      blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['/depotConvention_de_stage']);

      this.depotService.deleteDepotConvention_de_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
        () => console.log("Data deleted succesfully"),
        () => console.log("Error")     
      );
  }

  getFile(fileData: FileData) {
    this.depotService.getPdfConvention_de_stage(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  

  getFileInNewWindow(fileData: FileData) {
    this.depotService.getPdfConvention_de_stage(fileData.filename, this.currentUser.email).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

}
