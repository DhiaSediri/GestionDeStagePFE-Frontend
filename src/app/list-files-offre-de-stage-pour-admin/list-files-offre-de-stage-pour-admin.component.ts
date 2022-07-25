import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { DeleteFileService } from '../_services/delete-file.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-list-files-offre-de-stage-pour-admin',
  templateUrl: './list-files-offre-de-stage-pour-admin.component.html',
  styleUrls: ['./list-files-offre-de-stage-pour-admin.component.css']
})
export class ListFilesOffreDeStagePourAdminComponent implements OnInit {

  societe : any;
  session : any;
  option : any;

  fileList?: FileData[];

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private deleteFileService: DeleteFileService, private _router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.societe = this.activatedRoute.snapshot.paramMap.get('societe');
    this.session = this.activatedRoute.snapshot.paramMap.get('session');
    this.option = this.activatedRoute.snapshot.paramMap.get('option');
    this.getFileOffresDeStageList();
  }

  getFileOffresDeStageList(): void {
    this.deleteFileService.listFileOffresDeStage(this.societe, this.session, this.option).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.deleteFileService
      .deleteFileOffresDeStage(fileData.filename,this.societe, this.session, this.option)
      .subscribe(blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['uploadOffresDeStage']);
  }

  getFile(fileData: FileData) {
    this.deleteFileService.getPdfOffresDeStage(fileData.filename, this.societe, this.session, this.option).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdfViewer.nativeElement.data = fileURL;
    })
  }
  
  getFileInNewWindow(fileData: FileData) {
    this.deleteFileService.getPdfOffresDeStage(fileData.filename, this.societe, this.session, this.option).subscribe((responseMessage) => {
    const file = new Blob([responseMessage], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    })
  }

  goToListOffreDeStagePourAdmin() {
    this._router.navigate(['/listOffreDeStagePourAdmin']);
  }

}
