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

    this.loadDetailsDepotConvention_de_stage();
    this.loadDetailsDepotFiche_de_stage();
    this.loadDetailsDepotBilan_périodique_début_du_stage();
    this.loadDetailsDepotBilan_périodique_milieu_du_stage();
    this.loadDetailsDepotBilan_périodique_fin_du_stage();
    this.loadDetailsDepotRapport_premiere_version();
    this.loadDetailsDepotRapport_version_finale();
    this.loadDetailsDepotJournal_de_stage();
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

  goToEncadrantDepotConvention_de_stage(email : string, id : number){
    console.log("email "+email);
    this.router.navigate(['/encadrantDepotConvention_de_stage', email, id]);
  }

  goToEncadrantDepotFiche_de_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    
    this.depotService.existeFiche_de_stage(id).subscribe(
      dataExisteFiche_de_stage => {
        console.log(dataExisteFiche_de_stage);   

        if(dataExisteFiche_de_stage == true){

          this.depotService.etatFiche_de_stage(id).subscribe(
            dataEtatFiche_de_stage => {
              console.log(dataEtatFiche_de_stage); 

              if(dataEtatFiche_de_stage == 1){
                alert('Vous pouvez traiter la fiche de stage tant que vous n avez pas encore déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotFiche_de_stage', email, id]);

              }  

              if(dataEtatFiche_de_stage == 2){
                alert('Vous avez déjà déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotFiche_de_stage', email, id]);
              }

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteFiche_de_stage == false){
          this.router.navigate(['/encadrantDepotFiche_de_stage', email, id]);
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  goToEncadrantDepotBilan_periodique_debut_du_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    
    this.depotService.existeBilan_périodique_début_du_stage(id).subscribe(
      dataExisteBilan_périodique_début_du_stage => {
        console.log(dataExisteBilan_périodique_début_du_stage);   

        if(dataExisteBilan_périodique_début_du_stage == true){

          this.depotService.etatBilan_périodique_début_du_stage(id).subscribe(
            dataEtatBilan_périodique_début_du_stage => {
              console.log(dataEtatBilan_périodique_début_du_stage); 

              if(dataEtatBilan_périodique_début_du_stage == 1){
                alert('Vous pouvez traiter le Bilan periodique debut du stage tant que vous n avez pas encore déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotBilan_periodique_debut_du_stage', email, id]);
              }  

              if(dataEtatBilan_périodique_début_du_stage == 2){
                alert('Vous avez déjà déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotBilan_periodique_debut_du_stage', email, id]);
              }

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteBilan_périodique_début_du_stage == false){
          this.router.navigate(['/encadrantDepotBilan_periodique_debut_du_stage', email, id]);
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  goToEncadrantDepotBilan_periodique_milieu_du_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    
    this.depotService.existeBilan_périodique_milieu_du_stage(id).subscribe(
      dataExisteBilan_periodique_milieu_du_stage => {
        console.log(dataExisteBilan_periodique_milieu_du_stage);   

        if(dataExisteBilan_periodique_milieu_du_stage == true){

          this.depotService.etatBilan_périodique_milieu_du_stage(id).subscribe(
            dataEtatBilan_periodique_milieu_du_stage => {
              console.log(dataEtatBilan_periodique_milieu_du_stage); 

              if(dataEtatBilan_periodique_milieu_du_stage == 1){
                alert('Vous pouvez traiter le Bilan periodique milieu du stage tant que vous n avez pas encore déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotBilan_periodique_milieu_du_stage', email, id]);
              }  

              if(dataEtatBilan_periodique_milieu_du_stage == 2){
                alert('Vous avez déjà déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotBilan_periodique_milieu_du_stage', email, id]);
              }

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteBilan_periodique_milieu_du_stage == false){
          this.router.navigate(['/encadrantDepotBilan_periodique_milieu_du_stage', email, id]);
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  goToEncadrantDepotBilan_periodique_fin_du_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    
    this.depotService.existeBilan_périodique_fin_du_stage(id).subscribe(
      dataExisteBilan_périodique_fin_du_stage => {
        console.log(dataExisteBilan_périodique_fin_du_stage);   

        if(dataExisteBilan_périodique_fin_du_stage == true){

          this.depotService.etatBilan_périodique_fin_du_stage(id).subscribe(
            dataEtatBilan_périodique_fin_du_stage => {
              console.log(dataEtatBilan_périodique_fin_du_stage); 

              if(dataEtatBilan_périodique_fin_du_stage == 1){
                alert('Vous pouvez traiter le Bilan periodique fin du stage tant que vous n avez pas encore déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotBilan_periodique_fin_du_stage', email, id]);
              }  

              if(dataEtatBilan_périodique_fin_du_stage == 2){
                alert('Vous avez déjà déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotBilan_periodique_fin_du_stage', email, id]);
              }

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteBilan_périodique_fin_du_stage == false){
          this.router.navigate(['/encadrantDepotBilan_periodique_fin_du_stage', email, id]);
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  goToEncadrantDepotRapport_premiere_version(email : string, id : number){
    console.log("email "+email, "id "+id);
    
    this.depotService.existeRapport_premiere_version(id).subscribe(
      dataExisteRapport_premiere_version => {
        console.log(dataExisteRapport_premiere_version);   

        if(dataExisteRapport_premiere_version == true){

          this.depotService.etatRapport_premiere_version(id).subscribe(
            dataEtatRapport_premiere_version => {
              console.log(dataEtatRapport_premiere_version); 

              if(dataEtatRapport_premiere_version == 1){
                alert('Vous pouvez traiter le Rapport de stage tant que vous n avez pas encore déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotRapport_premiere_version', email, id]);
              }  

              if(dataEtatRapport_premiere_version == 2){
                alert('Vous avez déjà déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotRapport_premiere_version', email, id]);
              }

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteRapport_premiere_version == false){
          this.router.navigate(['/encadrantDepotRapport_premiere_version', email, id]);
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  goToEncadrantDepotJournal_de_stage(email : string, id : number){
    console.log("email "+email, "id "+id);
    
    this.depotService.existeJournal_de_stage(id).subscribe(
      dataExisteJournal_de_stage => {
        console.log(dataExisteJournal_de_stage);   

        if(dataExisteJournal_de_stage == true){

          this.depotService.etatJournal_de_stage(id).subscribe(
            dataEtatJournal_de_stage => {
              console.log(dataEtatJournal_de_stage); 

              if(dataEtatJournal_de_stage == 1){
                alert('Vous pouvez traiter le Journal de stage tant que vous n avez pas encore déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotJournal_de_stage', email, id]);
              }  

              if(dataEtatJournal_de_stage == 2){
                alert('Vous avez déjà déclarer le traitement final de ce dépot');
                this.router.navigate(['/encadrantDepotJournal_de_stage', email, id]);
              }

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteJournal_de_stage == false){
          this.router.navigate(['/encadrantDepotJournal_de_stage', email, id]);
        } 
      },
      error => console.log("Exception Occured")        
    );
  }
  
}
