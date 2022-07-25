import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { DeleteFileService } from '../_services/delete-file.service';
import { saveAs } from 'file-saver';
import { RapportDeStage } from '../_models/rapport-de-stage';

@Component({
  selector: 'app-list-files-rapport-de-stage-pour-admin',
  templateUrl: './list-files-rapport-de-stage-pour-admin.component.html',
  styleUrls: ['./list-files-rapport-de-stage-pour-admin.component.css']
})
export class ListFilesRapportDeStagePourAdminComponent implements OnInit {

  session : any;
  option : any;
  encadrant : any;

  fileList?: FileData[];

  rappotDeStage = new RapportDeStage();

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private deleteFileService: DeleteFileService, private _router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.session = this.activatedRoute.snapshot.paramMap.get('session');
    this.option = this.activatedRoute.snapshot.paramMap.get('option');
    this.encadrant = this.activatedRoute.snapshot.paramMap.get('encadrant'); 
    this.getFileList();
  }

  getFileList(): void {
    this.deleteFileService.listFileRapportsDeStage(this.session, this.option, this.encadrant).subscribe(result => {
      this.fileList = result;
    });
  }

  deleteFile(fileData: FileData): void {
    this.deleteFileService
      .deleteFileRapportsDeStage(fileData.filename, this.session, this.option, this.encadrant)
      .subscribe(blob => saveAs(blob, fileData.filename));
      alert('File deleted successfully');
      this._router.navigate(['uploadRapportsDeStage']);
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
    this._router.navigate(['/listRapportDeStagePourAdmin']);
  }

}
