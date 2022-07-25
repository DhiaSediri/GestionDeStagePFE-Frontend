import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { DepotService } from '../_services/depot.service';

@Component({
  selector: 'app-list-depot-convention-de-stage-deposeepour-admin',
  templateUrl: './list-depot-convention-de-stage-deposeepour-admin.component.html',
  styleUrls: ['./list-depot-convention-de-stage-deposeepour-admin.component.css']
})
export class ListDepotConventionDeStageDEPOSEEPourAdminComponent implements OnInit {

  mots_cles?: string;

  _conventionDeStageDEPOSEElist : Depot[]=[];

  constructor(private depotService: DepotService, private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._conventionDeStageDEPOSEElist=[];
    this.depotService.fetchDepotConvention_de_stageDEPOSEEListFromRemote().subscribe(   
      (data: Depot[]) => {
        console.log("Response Recieved");
        this._conventionDeStageDEPOSEElist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  fetchListDepotConvention_de_stageDEPOSEEParRecherche(): void {
    this._conventionDeStageDEPOSEElist=[];
    this.depotService.fetchListDepotConvention_de_stageDEPOSEEParRechercheFromRemote(this.mots_cles).subscribe(   
      (data: Depot[]) => {
        console.log("Response Recieved");
        this._conventionDeStageDEPOSEElist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  goToListFileDepotConventionDeStagePourAdmin(etudiant_email: any, depot_id: any) {
    this._router.navigate(['/listFileDepotConventionDeStagePourAdmin', etudiant_email, depot_id]);
  }

  goToListDepotConventionDeStagePourAdmin() {
    this._router.navigate(['/listDepotConventionDeStagePourAdmin']);
  }

}
