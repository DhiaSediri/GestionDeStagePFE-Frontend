import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../_models/commentaire';
import { CommentaireService } from '../_services/commentaire.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-edit-commentaire-rapport-version-final',
  templateUrl: './edit-commentaire-rapport-version-final.component.html',
  styleUrls: ['./edit-commentaire-rapport-version-final.component.css']
})
export class EditCommentaireRapportVersionFinalComponent implements OnInit {

  currentUser: any;

  commentaire = new Commentaire();

  constructor(private commentaireService : CommentaireService, private router : Router, private activatedRoute : ActivatedRoute, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    const test = this.activatedRoute.snapshot.paramMap.get('id');
    if(test != null){
      const id = parseInt(test);
      this.commentaireService.fetchCommentaireByIdFromRemote(id).subscribe(
        data => {
          console.log("Data fetch succesfully");
          this.commentaire = data;
        },
        error => console.log("Exception Occured")     
      );
    }   
  }

  onSubmit(){
    this.commentaireService.addCommentaireRapport_version_finaleToRemote(this.currentUser.id, this.commentaire.contenu).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['depotRapport_version_finale']);
      },
      err => {
        console.log("Error") 
      }
    );
  }

  annuler(){
    this.router.navigate(['depotRapport_version_finale']);
  }

}
