import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-encadrant-depot',
  templateUrl: './encadrant-depot.component.html',
  styleUrls: ['./encadrant-depot.component.css']
})
export class EncadrantDepotComponent implements OnInit {

  etudiant_id : any;

  etudiant_email : any;

  depotConvention_de_stage = new Depot();
  depotFiche_de_stage = new Depot();
  depotBilan_periodique_debut_du_stage = new Depot();
  depotBilan_periodique_milieu_du_stage = new Depot();
  depotBilan_periodique_fin_du_stage = new Depot();
  depotRapport_premiere_version = new Depot();
  depotRapport_version_finale = new Depot();
  depotJournal_de_stage = new Depot();

  constructor(private depotService: DepotService, private router: Router, private token: TokenStorageService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('email');

    /*this.loadDetailsDepotConvention_de_stage();
    this.loadDetailsDepotFiche_de_stage();
    this.loadDetailsDepotBilan_périodique_début_du_stage();
    this.loadDetailsDepotBilan_périodique_milieu_du_stage();
    this.loadDetailsDepotBilan_périodique_fin_du_stage();
    this.loadDetailsDepotRapport_premiere_version();
    this.loadDetailsDepotRapport_version_finale();
    this.loadDetailsDepotJournal_de_stage();*/
  }

  loadDetailsDepotConvention_de_stage() {
    this.depotService.fetchDetailsDepotConvention_de_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data retrived succesfully");
        this.depotConvention_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotFiche_de_stage() {
    this.depotService.fetchDetailsDepotFiche_de_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data retrived succesfully");
        this.depotFiche_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotBilan_périodique_début_du_stage() {
    this.depotService.fetchDetailsDepotBilan_périodique_début_du_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data retrived succesfully");
        this.depotBilan_periodique_debut_du_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotBilan_périodique_milieu_du_stage() {
    this.depotService.fetchDetailsDepotBilan_périodique_milieu_du_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data retrived succesfully");
        this.depotBilan_periodique_milieu_du_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotBilan_périodique_fin_du_stage() {
    this.depotService.fetchDetailsDepotBilan_périodique_fin_du_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data retrived succesfully");
        this.depotBilan_periodique_fin_du_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotRapport_premiere_version() {
    this.depotService.fetchDetailsDepotRapport_premiere_versionByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data retrived succesfully");
        this.depotRapport_premiere_version = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotRapport_version_finale() {
    this.depotService.fetchDetailsDepotRapport_version_finaleByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data retrived succesfully");
        this.depotRapport_version_finale= data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotJournal_de_stage() {
    this.depotService.fetchDetailsDepotJournal_de_stageByEtudiantIdFromRemote(this.etudiant_id).subscribe(
      data => {
        console.log("Data retrived succesfully");
        this.depotJournal_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  goToEncadrantDepotConvention_de_stage(email : string){
    console.log("email "+email);
    this.router.navigate(['/encadrantDepotConvention_de_stage', email]);
  }

  goToEncadrantDepotFiche_de_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    this.router.navigate(['/encadrantDepotFiche_de_stage', email, id]);
  }

  goToEncadrantDepotBilan_periodique_debut_du_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    this.router.navigate(['/encadrantDepotBilan_periodique_debut_du_stage', email, id]);
  }

  goToEncadrantDepotBilan_periodique_milieu_du_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    this.router.navigate(['/encadrantDepotBilan_periodique_milieu_du_stage', email, id]);
  }

  goToEncadrantDepotBilan_periodique_fin_du_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    this.router.navigate(['/encadrantDepotBilan_periodique_fin_du_stage', email, id]);
  }

  goToEncadrantDepotRapport_premiere_version(email : string, id : number){
    console.log("email "+email, "id "+id);
    this.router.navigate(['/encadrantDepotRapport_premiere_version', email, id]);
  }

  goToEncadrantDepotRapport_version_finale(email : string, id : number){
    console.log("email "+email, "id "+id);
    this.router.navigate(['/encadrantDepotRapport_version_finale', email, id]);
  }

  goToEncadrantDepotJournal_de_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    this.router.navigate(['/encadrantDepotJournal_de_stage', email, id]);
  }

}
