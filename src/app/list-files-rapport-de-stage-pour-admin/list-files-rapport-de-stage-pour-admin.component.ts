import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { DeleteFileService } from '../_services/delete-file.service';
import { saveAs } from 'file-saver';
import { RapportDeStage } from '../_models/rapport-de-stage';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-list-files-rapport-de-stage-pour-admin',
  templateUrl: './list-files-rapport-de-stage-pour-admin.component.html',
  styleUrls: ['./list-files-rapport-de-stage-pour-admin.component.css']
})
export class ListFilesRapportDeStagePourAdminComponent implements OnInit {

  rapport_id: any;
  session : any;
  option : any;
  encadrant : any;

  fileList?: FileData[];

  rappotDeStage = new RapportDeStage();

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private deleteFileService: DeleteFileService, private uploadFileService: UploadFileService, private _router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.rapport_id = this.activatedRoute.snapshot.paramMap.get('rapport_id');
    this.session = this.activatedRoute.snapshot.paramMap.get('session');
    this.option = this.activatedRoute.snapshot.paramMap.get('option');
    this.encadrant = this.activatedRoute.snapshot.paramMap.get('encadrant'); 
    this.getFileRapportsDeStageList();
  }

  getFileRapportsDeStageList(): void {
    this.deleteFileService.listFileRapportsDeStage(this.session, this.option, this.encadrant).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.deleteFileService.deleteFileRapportsDeStage(fileData.filename, this.session, this.option, this.encadrant).subscribe(
      blob => saveAs(blob, fileData.filename)
    );

      this.uploadFileService.deleteRapportDeStageByIdFromRemote(this.rapport_id).subscribe(
        () => {
          console.debug("Deleted Successfully");
        },
        () => {
          console.log("Exception Occured");
        }
      );

      alert('Cette opération a été effectuée avec succès');
      this._router.navigate(['listRapportsDeStagePourAdmin']);
  }

  getFile(fileData: FileData) {
    this.deleteFileService.getPdfRapportsDeStage(fileData.filename, this.session, this.option, this.encadrant).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  
  getFileInNewWindow(fileData: FileData) {
    this.deleteFileService.getPdfRapportsDeStage(fileData.filename, this.session, this.option, this.encadrant).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  goToListRapportDeStagePourAdmin() {
    this._router.navigate(['/listRapportsDeStagePourAdmin']);
  }

}
