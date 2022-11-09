import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepotService } from './_services/depot.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showStudentBoard = false;
  showaAcademicSupervisorBoard = false;
  username!: string;

  currentUser: any;

  constructor(private tokenStorageService: TokenStorageService, private _router: Router, private depotService: DepotService) {}

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('Admin');
      this.showStudentBoard = this.roles.includes('Student');
      this.showaAcademicSupervisorBoard = this.roles.includes('Academic_Supervisor');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  goToDownloadDocumentsDeStage() {
    this._router.navigate(['/downloadDocumentsDeStage', this.currentUser.email]);
  }

  testerDemandeDeStage() {
    this.depotService.existeDemandeDeStage(this.currentUser.id).subscribe(
      dataExiste => {
        console.log(dataExiste);   

        if(dataExiste == true){

          this.depotService.etatDemandeDeStage(this.currentUser.id).subscribe(
            dataEtat => {
              console.log(dataEtat);

              if(dataEtat == 1){
                alert('Vous avez fait une demande de stage, vous devez patienter le traitement');
              }  

              if(dataEtat == 2){
                alert('Votre Demande de stage est validée par l administrateur, vous pouvez faire qu une seule demande de stage');
              }

              if(dataEtat == 0){
                alert('Votre Demande de stage n est pas validée par l administrateur, Vous devais faire une nouvelle demande');
                this._router.navigate(['addDocumentsDeStage']);
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExiste == false){
          alert('Vous devais faire une Demande de stage qui doit être validée par l administrateur, dans ce cas vous pouvez déposer vos livrables');
          this._router.navigate(['addDocumentsDeStage']);
        } 
      },
      error => console.log("Exception Occured")        
    );
  }

  testerDemandeDeStagePourGererDepots() {
    this.depotService.existeDemandeDeStage(this.currentUser.id).subscribe(
      dataExiste => {
        console.log(dataExiste);   

        if(dataExiste == true){

          this.depotService.etatDemandeDeStage(this.currentUser.id).subscribe(
            dataEtat => {
              console.log(dataEtat);

              if(dataEtat == 1){
                alert('Votre Demande de stage est déposée, vous devez patienter le traitement');
              }  

              if(dataEtat == 2){
                alert('Votre Demande de stage est validée par l administrateur, vous pouvez maintenant déposer vos livrables');
                this._router.navigate(['gererDepot']);
              }

              if(dataEtat == 0){
                alert('Votre Demande de stage n est pas validée par l administrateur, Vous devais faire une nouvelle demande');
              } 

            },
            error => console.log("Exception Occured")        
          );
        } 
        
        if(dataExiste == false){
          alert('Vous devais faire une Demande de stage pour que vous puissez déposer vos livrables');
        } 
      },
      error => console.log("Exception Occured")        
    );
  }


}
