import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { OffreDeStage } from '../_models/offre-de-stage';
import { DeleteFileService } from '../_services/delete-file.service';

@Component({
  selector: 'app-list-files-offre-de-stage-pour-etudiant',
  templateUrl: './list-files-offre-de-stage-pour-etudiant.component.html',
  styleUrls: ['./list-files-offre-de-stage-pour-etudiant.component.css']
})
export class ListFilesOffreDeStagePourEtudiantComponent implements OnInit {

  societe : any;
  session : any;
  option : any;

  fileList?: FileData[];

  offreDeStage = new OffreDeStage();

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private deleteFileService: DeleteFileService, private _router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.societe = this.activatedRoute.snapshot.paramMap.get('societe');
    this.session = this.activatedRoute.snapshot.paramMap.get('session');
    this.option = this.activatedRoute.snapshot.paramMap.get('option');
    this.getFileList();
  }

  getFileList(): void {
    this.deleteFileService.listFileOffresDeStage(this.societe, this.session, this.option).subscribe(result => {
      this.fileList = result;
    });
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

  goToListOffreDeStagePourEtudiant() {
    this._router.navigate(['/listOffreDeStagePourEtudiant']);
  }

}
