import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileData } from '../_models/file-data';
import { RapportDeStage } from '../_models/rapport-de-stage';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-list-rapports-de-stage-pour-etudiant',
  templateUrl: './list-rapports-de-stage-pour-etudiant.component.html',
  styleUrls: ['./list-rapports-de-stage-pour-etudiant.component.css']
})
export class ListRapportsDeStagePourEtudiantComponent implements OnInit {

  mots_cles?: string;

  _rapportDeStagelist : RapportDeStage[]=[];

  fileList?: FileData[];

  constructor(private uploadFileService: UploadFileService, private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._rapportDeStagelist=[];
    this.uploadFileService.fetchRapportDeStageListFromRemote().subscribe(   
      (data: RapportDeStage[]) => {
        console.log("Response Recieved");
        this._rapportDeStagelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  fetchRappportDeStageListParRecherche(): void {
    this._rapportDeStagelist=[];
    this.uploadFileService.fetchRapportDeStageListParRechercheFromRemote(this.mots_cles).subscribe(   
      (data: RapportDeStage[]) => {
        console.log("Response Recieved");
        this._rapportDeStagelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  goToListFilesRapportDeStagePourEtudiant(session: any, option: any, encadrant: any) {
    this._router.navigate(['/listFilesRapportDeStagePourEtudiant', session, option, encadrant]);
  }

}
