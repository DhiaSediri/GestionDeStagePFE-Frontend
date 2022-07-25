import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileData } from '../_models/file-data';

import { Router } from '@angular/router';
import { RapportDeStage } from '../_models/rapport-de-stage';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-list-rapport-de-stage-pour-admin',
  templateUrl: './list-rapport-de-stage-pour-admin.component.html',
  styleUrls: ['./list-rapport-de-stage-pour-admin.component.css']
})
export class ListRapportDeStagePourAdminComponent implements OnInit {

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

  deleteRapportDeStage(id : number){
    this.uploadFileService.deleteRapportDeStageByIdFromRemote(id).subscribe(
      () => {
        console.debug("Deleted Successfully");
      },
      () => {
        console.log("Exception Occured");
      }
    );
  }

  goToAddRapportDeStage() {
    this._router.navigate(['/uploadRapportsDeStage']);
  }

  goToListFilesRapportDeStagePourAdmin(session: any, option:any, encadrant:any) {
    this._router.navigate(['/listFilesRapportDeStagePourAdmin', session, option, encadrant]);
  }

}
