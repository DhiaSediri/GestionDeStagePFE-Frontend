import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-affectation-list',
  templateUrl: './affectation-list.component.html',
  styleUrls: ['./affectation-list.component.css']
})
export class AffectationListComponent implements OnInit {

  mots_cles?: string;

  _listEncadrant : User[]=[];

  encadrant_id : any;

  constructor(private service:UserService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.fetchAcademicsSupervisorListFromRemote().subscribe(   
      (data: User[]) => {
        console.log("Response Recieved");
        this._listEncadrant=data;
      },
      () => console.log("Exception Occured")
    );
  }

  fetchAcademicsSupervisorListParRecherche(): void {
    this._listEncadrant=[];
    this.service.fetchListUsersParRechercheFromRemote(this.mots_cles).subscribe(   
      (data: User[]) => {
        console.log("Response Recieved");
        this._listEncadrant=data;
      },
      () => console.log("Exception Occured")
    );
  }

  goToListeEtudiantPourEncadrantAffectaion(encadrant_id : any) {
    console.log("encadrant_id "+encadrant_id);
    this.router.navigate(['/listeEtudiantsPourEncadrantAffectaion', encadrant_id]);
  }

  goToAddAffectation(){
    this.router.navigate(['/addAffectation']);
  }

}
