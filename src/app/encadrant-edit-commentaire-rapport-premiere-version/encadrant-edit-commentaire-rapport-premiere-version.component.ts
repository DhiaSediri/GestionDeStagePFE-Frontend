import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../_models/commentaire';
import { CommentaireService } from '../_services/commentaire.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-encadrant-edit-commentaire-rapport-premiere-version',
  templateUrl: './encadrant-edit-commentaire-rapport-premiere-version.component.html',
  styleUrls: ['./encadrant-edit-commentaire-rapport-premiere-version.component.css']
})
export class EncadrantEditCommentaireRapportPremiereVersionComponent implements OnInit {

  currentUser: any;

  etudiant_email : any;

  etudiant_id : any;

  commentaire = new Commentaire();

  constructor(private commentaireService : CommentaireService, private router : Router, private activatedRoute : ActivatedRoute, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.etudiant_email = this.activatedRoute.snapshot.paramMap.get('etudiant_email');
    this.etudiant_id = this.activatedRoute.snapshot.paramMap.get('etudiant_id');
    const test = this.activatedRoute.snapshot.paramMap.get('commentaire_id');
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
        this.router.navigate(['encadrantDepotRapport_premiere_version', this.etudiant_email, this.etudiant_id]);
      },
      err => {
        console.log("Error") 
      }
    );
  }

  annuler(){
    this.router.navigate(['encadrantDepotRapport_premiere_version', this.etudiant_email, this.etudiant_id]);
  }

}
