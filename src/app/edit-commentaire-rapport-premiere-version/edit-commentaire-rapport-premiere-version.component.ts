import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../_models/commentaire';
import { CommentaireService } from '../_services/commentaire.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-edit-commentaire-rapport-premiere-version',
  templateUrl: './edit-commentaire-rapport-premiere-version.component.html',
  styleUrls: ['./edit-commentaire-rapport-premiere-version.component.css']
})
export class EditCommentaireRapportPremiereVersionComponent implements OnInit {

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
    this.commentaireService.editCommentaireRapport_premiere_versionToRemote(this.commentaire).subscribe(
      data => {
        console.log(data);
        alert('Cette opération a été effectuée avec succès');
        this.router.navigate(['depotRapport_premiere_version']);
      },
      err => {
        console.log("Error") 
      }
    );
  }

  annuler(){
    this.router.navigate(['depotRapport_premiere_version']);
  }

}
