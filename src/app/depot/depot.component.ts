import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Depot } from '../_models/depot';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  currentUser: any;

  test?: boolean;

  depotConvention_de_stage = new Depot();
  depotFiche_de_stage = new Depot();
  depotBilan_periodique_debut_du_stage = new Depot();
  depotBilan_periodique_milieu_du_stage = new Depot();
  depotBilan_periodique_fin_du_stage = new Depot();
  depotRapport_premiere_version = new Depot();
  depotRapport_version_finale = new Depot();
  depotJournal_de_stage = new Depot();

  constructor(private depotService: DepotService, private _router:Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

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
    this.depotService.fetchDetailsDepotConvention_de_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotConvention_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotFiche_de_stage() {
    this.depotService.fetchDetailsDepotFiche_de_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotFiche_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotBilan_périodique_début_du_stage() {
    this.depotService.fetchDetailsDepotBilan_périodique_début_du_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotBilan_periodique_debut_du_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotBilan_périodique_milieu_du_stage() {
    this.depotService.fetchDetailsDepotBilan_périodique_milieu_du_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotBilan_periodique_milieu_du_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotBilan_périodique_fin_du_stage() {
    this.depotService.fetchDetailsDepotBilan_périodique_fin_du_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotBilan_periodique_fin_du_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotRapport_premiere_version() {
    this.depotService.fetchDetailsDepotRapport_premiere_versionByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotRapport_premiere_version = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotRapport_version_finale() {
    this.depotService.fetchDetailsDepotRapport_version_finaleByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotRapport_version_finale= data;
      },
      error => console.log("Exception Occured")        
    );
  }

  loadDetailsDepotJournal_de_stage() {
    this.depotService.fetchDetailsDepotJournal_de_stageByEtudiantIdFromRemote(this.currentUser.id).subscribe(
      data => {
        console.log("Data load succesfully");
        this.depotJournal_de_stage = data;
      },
      error => console.log("Exception Occured")        
    );
  }

  /*testerConvention_de_stage() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExiste => {
        console.log(dataExiste);   

        if(dataExiste == true){

          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtat => {
              console.log(dataEtat);

              if(dataEtat == 1){
                alert('Vous pouvez modifier votre livrable tant qu il n est pas encore traité');
                this._router.navigate(['depotConvention_de_stage']);
              }  

              if(dataEtat == 2){
                alert('Votre livrable est déjà traité, vous ne pouvez pas le modifier');
              }

              if(dataEtat == 0){
                alert('Votre convention de stage est réfusée, Vous devais déposer un nouveau livrable');
                this._router.navigate(['depotConvention_de_stage']);
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExiste == false){
          alert('Vous devais déposer une convetion de stage pour que vous puissez déposer vos livrables');
          this._router.navigate(['depotConvention_de_stage']);
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  testerFiche_de_stage() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   

        if(dataExisteConvention_de_stage == true){

          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 1){
                alert('Votre Convention de stage n est pas encore traité');
              }  

              if(dataEtatConvention_de_stage == 2){
                //////////////////////////// Début Test Fiche_de_stage ////////////////////////////
                this.depotService.existeFiche_de_stage(this.currentUser.id).subscribe(
                  dataExisteFiche_de_stage => {
                    console.log(dataExisteFiche_de_stage);   
            
                    if(dataExisteFiche_de_stage == true){
            
                      this.depotService.etatFiche_de_stage(this.currentUser.id).subscribe(
                        dataEtatFiche_de_stage => {
                          console.log(dataEtatFiche_de_stage); 
            
                          if(dataEtatFiche_de_stage == 1){
                            alert('Vous pouvez modifier votre livrable tant qu il n est pas encore traité');
                            this._router.navigate(['depotFiche_de_stage']);
                          }  
            
                          if(dataEtatFiche_de_stage == 2){
                            alert('Votre livrable est déjà traité, vous ne pouvez pas le modifier');
                          }
            
                          if(dataEtatFiche_de_stage == 0){
                            alert('Votre Fiche de stage est réfusée, Vous devais déposer un nouveau livrable');
                            this._router.navigate(['depotFiche_de_stage']);
                          } 
            
                        },
                        error => console.log("Exception Occured")        
                      );
                    } 
                    
                    if(dataExisteFiche_de_stage == false){
                      this._router.navigate(['depotFiche_de_stage']);
                    } 
                  },
                  error => console.log("Exception Occured")        
                );
                //////////////////////////// Fin Test Fiche_de_stage ////////////////////////////
              }

              if(dataEtatConvention_de_stage == 0){
                alert('Votre convention de stage est réfusée, Vous devais déposer un nouveau livrable');
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteConvention_de_stage == false){
          alert('Vous devais déposer une convetion de stage pour que vous puissez déposer le reste des livrables');
        } 
      },
      error => console.log("Exception Occured")        
    );
  } 

  testerBilan_periodique_debut_du_stage() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   

        if(dataExisteConvention_de_stage == true){

          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 1){
                alert('Votre Convention de stage n est pas encore traité');
              }  

              if(dataEtatConvention_de_stage == 2){
                //////////////////////////// Début Test Bilan_périodique_début_du_stage ////////////////////////////
                this.depotService.existeBilan_périodique_début_du_stage(this.currentUser.id).subscribe(
                  dataExisteBilan_périodique_début_du_stage => {
                    console.log(dataExisteBilan_périodique_début_du_stage);   
            
                    if(dataExisteBilan_périodique_début_du_stage == true){
            
                      this.depotService.etatBilan_périodique_début_du_stage(this.currentUser.id).subscribe(
                        dataEtatBilan_périodique_début_du_stage => {
                          console.log(dataEtatBilan_périodique_début_du_stage); 
            
                          if(dataEtatBilan_périodique_début_du_stage == 1){
                            alert('Vous pouvez modifier votre livrable tant qu il n est pas encore traité');
                            this._router.navigate(['depotBilan_périodique_début_du_stage']);
                          }  
            
                          if(dataEtatBilan_périodique_début_du_stage == 2){
                            alert('Votre livrable est déjà traité, vous ne pouvez pas le modifier');
                          }
            
                          if(dataEtatBilan_périodique_début_du_stage == 0){
                            alert('Votre Bilan_périodique_début_du_stage est réfusé, Vous devais déposer un nouveau livrable');
                            this._router.navigate(['depotBilan_périodique_début_du_stage']);
                          } 
            
                        },
                        error => console.log("Exception Occured")        
                      );
                    } 
                    
                    if(dataExisteBilan_périodique_début_du_stage == false){
                      this._router.navigate(['depotBilan_périodique_début_du_stage']);
                    } 
                  },
                  error => console.log("Exception Occured")        
                );
                //////////////////////////// Fin Test Bilan_périodique_début_du_stage ////////////////////////////
              }

              if(dataEtatConvention_de_stage == 0){
                alert('Votre convention de stage est réfusée, Vous devais déposer un nouveau livrable');
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteConvention_de_stage == false){
          alert('Vous devais déposer une convetion de stage pour que vous puissez déposer le reste des livrables');
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  testerBilan_periodique_milieu_du_stage() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   

        if(dataExisteConvention_de_stage == true){

          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 1){
                alert('Votre Convention de stage n est pas encore traité');
              }  

              if(dataEtatConvention_de_stage == 2){
                //////////////////////////// Début Test Bilan_périodique_milieu_du_stage ////////////////////////////
                this.depotService.existeBilan_périodique_milieu_du_stage(this.currentUser.id).subscribe(
                  dataExisteBilan_périodique_milieu_du_stage => {
                    console.log(dataExisteBilan_périodique_milieu_du_stage);   
            
                    if(dataExisteBilan_périodique_milieu_du_stage == true){
            
                      this.depotService.etatBilan_périodique_début_du_stage(this.currentUser.id).subscribe(
                        dataEtatBilan_périodique_milieu_du_stage => {
                          console.log(dataEtatBilan_périodique_milieu_du_stage); 
            
                          if(dataEtatBilan_périodique_milieu_du_stage == 1){
                            alert('Vous pouvez modifier votre livrable tant qu il n est pas encore traité');
                            this._router.navigate(['depotBilan_périodique_milieu_du_stage']);
                          }  
            
                          if(dataEtatBilan_périodique_milieu_du_stage == 2){
                            alert('Votre livrable est déjà traité, vous ne pouvez pas le modifier');
                          }
            
                          if(dataEtatBilan_périodique_milieu_du_stage == 0){
                            alert('Votre Bilan_périodique_milieu_du_stage est réfusé, Vous devais déposer un nouveau livrable');
                            this._router.navigate(['depotBilan_périodique_milieu_du_stage']);
                          } 
            
                        },
                        error => console.log("Exception Occured")        
                      );
                    } 
                    
                    if(dataExisteBilan_périodique_milieu_du_stage == false){
                      this._router.navigate(['depotBilan_périodique_milieu_du_stage']);
                    } 
                  },
                  error => console.log("Exception Occured")        
                );
                //////////////////////////// Fin Test Bilan_périodique_milieu_du_stage ////////////////////////////
              }

              if(dataEtatConvention_de_stage == 0){
                alert('Votre convention de stage est réfusée, Vous devais déposer un nouveau livrable');
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteConvention_de_stage == false){
          alert('Vous devais déposer une convetion de stage pour que vous puissez déposer le reste des livrables');
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  testerBilan_periodique_fin_du_stage() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   

        if(dataExisteConvention_de_stage == true){

          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 1){
                alert('Votre Convention de stage n est pas encore traité');
              }  

              if(dataEtatConvention_de_stage == 2){
                //////////////////////////// Début Test Bilan_périodique_fin_du_stage ////////////////////////////
                this.depotService.existeBilan_périodique_fin_du_stage(this.currentUser.id).subscribe(
                  dataExisteBilan_périodique_fin_du_stage => {
                    console.log(dataExisteBilan_périodique_fin_du_stage);   
            
                    if(dataExisteBilan_périodique_fin_du_stage == true){
            
                      this.depotService.etatBilan_périodique_fin_du_stage(this.currentUser.id).subscribe(
                        dataEtatBilan_périodique_fin_du_stage => {
                          console.log(dataEtatBilan_périodique_fin_du_stage); 
            
                          if(dataEtatBilan_périodique_fin_du_stage == 1){
                            alert('Vous pouvez modifier votre livrable tant qu il n est pas encore traité');
                            this._router.navigate(['depotBilan_périodique_fin_du_stage']);
                          }  
            
                          if(dataEtatBilan_périodique_fin_du_stage == 2){
                            alert('Votre livrable est déjà traité, vous ne pouvez pas le modifier');
                          }
            
                          if(dataEtatBilan_périodique_fin_du_stage == 0){
                            alert('Votre Bilan_périodique_fin_du_stage est réfusé, Vous devais déposer un nouveau livrable');
                            this._router.navigate(['depotBilan_périodique_fin_du_stage']);
                          } 
            
                        },
                        error => console.log("Exception Occured")        
                      );
                    } 
                    
                    if(dataExisteBilan_périodique_fin_du_stage == false){
                      this._router.navigate(['depotBilan_périodique_fin_du_stage']);
                    } 
                  },
                  error => console.log("Exception Occured")        
                );
                //////////////////////////// Fin Test Bilan_périodique_fin_du_stage ////////////////////////////
              }

              if(dataEtatConvention_de_stage == 0){
                alert('Votre convention de stage est réfusée, Vous devais déposer un nouveau livrable');
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteConvention_de_stage == false){
          alert('Vous devais déposer une convetion de stage pour que vous puissez déposer le reste des livrables');
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  testerRapport_premiere_version() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   

        if(dataExisteConvention_de_stage == true){

          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 1){
                alert('Votre Convention de stage n est pas encore traité');
              }  

              if(dataEtatConvention_de_stage == 2){
                //////////////////////////// Début Test Rapport_premiere_version ////////////////////////////
                this.depotService.existeRapport_premiere_version(this.currentUser.id).subscribe(
                  dataExisteRapport_premiere_version => {
                    console.log(dataExisteRapport_premiere_version);   
            
                    if(dataExisteRapport_premiere_version == true){
            
                      this.depotService.etatRapport_premiere_version(this.currentUser.id).subscribe(
                        dataEtatRapport_premiere_version => {
                          console.log(dataEtatRapport_premiere_version); 
            
                          if(dataEtatRapport_premiere_version == 1){
                            alert('Vous pouvez modifier votre livrable tant qu il n est pas encore traité');
                            this._router.navigate(['depotRapport_premiere_version']);
                          }  
            
                          if(dataEtatRapport_premiere_version == 2){
                            alert('Votre livrable est déjà traité, vous ne pouvez pas le modifier');
                          }
            
                          if(dataEtatRapport_premiere_version == 0){
                            alert('Votre Rapport_premiere_version est réfusé, Vous devais déposer un nouveau livrable');
                            this._router.navigate(['depotRapport_premiere_version']);
                          } 
            
                        },
                        error => console.log("Exception Occured")        
                      );
                    } 
                    
                    if(dataExisteRapport_premiere_version == false){
                      this._router.navigate(['depotRapport_premiere_version']);
                    } 
                  },
                  error => console.log("Exception Occured")        
                );
                //////////////////////////// Fin Test Rapport_premiere_version ////////////////////////////
              }

              if(dataEtatConvention_de_stage == 0){
                alert('Votre convention de stage est réfusée, Vous devais déposer un nouveau livrable');
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteConvention_de_stage == false){
          alert('Vous devais déposer une convetion de stage pour que vous puissez déposer le reste des livrables');
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  testerRapport_version_finale() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   

        if(dataExisteConvention_de_stage == true){

          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 1){
                alert('Votre Convention de stage n est pas encore traité');
              }  

              if(dataEtatConvention_de_stage == 2){
                //////////////////////////// Début Test Rapport_version_finale ////////////////////////////
                this.depotService.existeRapport_version_finale(this.currentUser.id).subscribe(
                  dataExisteRapport_version_finale => {
                    console.log(dataExisteRapport_version_finale);   
            
                    if(dataExisteRapport_version_finale == true){
            
                      this.depotService.etatRapport_version_finale(this.currentUser.id).subscribe(
                        dataEtatRapport_version_finale => {
                          console.log(dataEtatRapport_version_finale); 
            
                          if(dataEtatRapport_version_finale == 1){
                            alert('Vous pouvez modifier votre livrable tant qu il n est pas encore traité');
                            this._router.navigate(['depotRapport_version_finale']);
                          }  
            
                          if(dataEtatRapport_version_finale == 2){
                            alert('Votre livrable est déjà traité, vous ne pouvez pas le modifier');
                          }
            
                          if(dataEtatRapport_version_finale == 0){
                            alert('Votre Rapport_version_finale est réfusé, Vous devais déposer un nouveau livrable');
                            this._router.navigate(['depotRapport_version_finale']);
                          } 
            
                        },
                        error => console.log("Exception Occured")        
                      );
                    } 
                    
                    if(dataExisteRapport_version_finale == false){
                      this._router.navigate(['depotRapport_version_finale']);
                    } 
                  },
                  error => console.log("Exception Occured")        
                );
                //////////////////////////// Fin Test Rapport_version_finale ////////////////////////////
              }

              if(dataEtatConvention_de_stage == 0){
                alert('Votre convention de stage est réfusée, Vous devais déposer un nouveau livrable');
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteConvention_de_stage == false){
          alert('Vous devais déposer une convetion de stage pour que vous puissez déposer le reste des livrables');
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  testerJournal_de_stage() {
    this.depotService.existeConvention_de_stage(this.currentUser.id).subscribe(
      dataExisteConvention_de_stage => {
        console.log(dataExisteConvention_de_stage);   

        if(dataExisteConvention_de_stage == true){

          this.depotService.etatConvention_de_stage(this.currentUser.id).subscribe(
            dataEtatConvention_de_stage => {
              console.log(dataEtatConvention_de_stage); 

              if(dataEtatConvention_de_stage == 1){
                alert('Votre Convention de stage n est pas encore traité');
              }  

              if(dataEtatConvention_de_stage == 2){
                //////////////////////////// Début Test Journal_de_stage ////////////////////////////
                this.depotService.existeJournal_de_stage(this.currentUser.id).subscribe(
                  dataExisteJournal_de_stage => {
                    console.log(dataExisteJournal_de_stage);   
            
                    if(dataExisteJournal_de_stage == true){
            
                      this.depotService.etatJournal_de_stage(this.currentUser.id).subscribe(
                        dataEtatJournal_de_stage => {
                          console.log(dataEtatJournal_de_stage); 
            
                          if(dataEtatJournal_de_stage == 1){
                            alert('Vous pouvez modifier votre livrable tant qu il n est pas encore traité');
                            this._router.navigate(['depotJournal_de_stage']);
                          }  
            
                          if(dataEtatJournal_de_stage == 2){
                            alert('Votre livrable est déjà traité, vous ne pouvez pas le modifier');
                          }
            
                          if(dataEtatJournal_de_stage == 0){
                            alert('Votre Journal_de_stage est réfusé, Vous devais déposer un nouveau livrable');
                            this._router.navigate(['depotJournal_de_stage']);
                          } 
            
                        },
                        error => console.log("Exception Occured")        
                      );
                    } 
                    
                    if(dataExisteJournal_de_stage == false){
                      this._router.navigate(['depotJournal_de_stage']);
                    } 
                  },
                  error => console.log("Exception Occured")        
                );
                //////////////////////////// Fin Test Journal_de_stage ////////////////////////////
              }

              if(dataEtatConvention_de_stage == 0){
                alert('Votre convention de stage est réfusée, Vous devais déposer un nouveau livrable');
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExisteConvention_de_stage == false){
          alert('Vous devais déposer une convetion de stage pour que vous puissez déposer le reste des livrables');
        } 
      },
      error => console.log("Exception Occured")        
    );
  }*/
}