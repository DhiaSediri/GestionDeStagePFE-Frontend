import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { OffreDeStage } from '../_models/offre-de-stage';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-list-offres-de-stage-pour-etudiant',
  templateUrl: './list-offres-de-stage-pour-etudiant.component.html',
  styleUrls: ['./list-offres-de-stage-pour-etudiant.component.css']
})
export class ListOffresDeStagePourEtudiantComponent implements OnInit {

  mots_cles?: string;

  _offreDeStagelist : OffreDeStage[]=[];

  fileList?: FileData[];

  constructor(private uploadFileService: UploadFileService, private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._offreDeStagelist=[];
    this.uploadFileService.fetchOffreDeStageListFromRemote().subscribe(   
      (data: OffreDeStage[]) => {
        console.log("Response Recieved");
        this._offreDeStagelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  fetchOffreDeStageListParRecherche(): void {
    this._offreDeStagelist=[];
    this.uploadFileService.fetchOffreDeStageListParRechercheFromRemote(this.mots_cles).subscribe(   
      (data: OffreDeStage[]) => {
        console.log("Response Recieved");
        this._offreDeStagelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  goToListFilesOffreDeStagePourEtudiant(societe: any, session: any, option: any) {
    this._router.navigate(['/listFilesOffreDeStagePourEtudiant', societe, session, option]);
  }

}
