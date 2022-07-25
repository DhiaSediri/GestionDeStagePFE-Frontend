import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileData } from '../_models/file-data';
import { Router } from '@angular/router';
import { OffreDeStage } from '../_models/offre-de-stage';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-list-offre-de-stage-pour-admin',
  templateUrl: './list-offre-de-stage-pour-admin.component.html',
  styleUrls: ['./list-offre-de-stage-pour-admin.component.css']
})
export class ListOffreDeStagePourAdminComponent implements OnInit {

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

  deleteOffreDeStage(id : number){
    this.uploadFileService.deleteOffreDeStageByIdFromRemote(id).subscribe(
      () => {
        console.debug("Deleted Successfully");
      },
      () => {
        console.log("Exception Occured");
      }
    );
  }

  goToAddOffreDeStage() {
    this._router.navigate(['/uploadOffresDeStage']);
  }

  goToListFilesOffreDeStagePourAdmin(societe: any, session: any, option: any) {
    this._router.navigate(['/listFilesOffreDeStagePourAdmin', societe, session, option]);
  }

}
