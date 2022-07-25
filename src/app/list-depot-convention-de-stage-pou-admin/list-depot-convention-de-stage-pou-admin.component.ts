import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { DepotService } from '../_services/depot.service';

@Component({
  selector: 'app-list-depot-convention-de-stage-pou-admin',
  templateUrl: './list-depot-convention-de-stage-pou-admin.component.html',
  styleUrls: ['./list-depot-convention-de-stage-pou-admin.component.css']
})
export class ListDepotConventionDeStagePouAdminComponent implements OnInit {

  mots_cles?: string;

  _conventionDeStagelist : Depot[]=[];

  constructor(private depotService: DepotService, private _router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._conventionDeStagelist=[];
    this.depotService.fetchDepotConvention_de_stageListFromRemote().subscribe(   
      (data: Depot[]) => {
        console.log("Response Recieved");
        this._conventionDeStagelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  fetchDepotConvention_de_stageListParRecherche(): void {
    this._conventionDeStagelist=[];
    this.depotService.fetchDepotConvention_de_stageListParRechercheFromRemote(this.mots_cles).subscribe(   
      (data: Depot[]) => {
        console.log("Response Recieved");
        this._conventionDeStagelist=data;
      },
      () => console.log("Exception Occured")
    );
  }

  goToListFileDepotConventionDeStagePourAdmin(etudiant_email: any, depot_id: any) {
    this._router.navigate(['/listFileDepotConventionDeStagePourAdmin', etudiant_email, depot_id]);
  }

  goToListDepotConventionDeStageDEPOSEEPourAdmin() {
    this._router.navigate(['/listDepotConventionDeStageDEPOSEEPourAdmin']);
  }

}
