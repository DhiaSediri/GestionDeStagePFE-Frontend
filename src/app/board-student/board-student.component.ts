import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepotService } from '../_services/depot.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-student',
  templateUrl: './board-student.component.html',
  styleUrls: ['./board-student.component.css']
})
export class BoardStudentComponent implements OnInit {

  currentUser: any;

  content?: string;

  constructor(private userService: UserService, private depotService: DepotService, private token: TokenStorageService, private _router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.userService.getStudentBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
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
                alert('Votre Demande de stage est déposée, vous devez patienter le traitement');
              }  

              if(dataEtat == 2){
                alert('Votre Demande de stage est acceptée, vous pouvez maintenant déposer vos livrables');
                this._router.navigate(['gererDepot']);
              }

              if(dataEtat == 0){
                alert('Votre Demande de stage est réfusée, Vous devais faire une nouvelle demande');
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
