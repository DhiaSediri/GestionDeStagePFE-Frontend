import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-list-etudiants-pour-encadrant-affectaion',
  templateUrl: './list-etudiants-pour-encadrant-affectaion.component.html',
  styleUrls: ['./list-etudiants-pour-encadrant-affectaion.component.css']
})
export class ListEtudiantsPourEncadrantAffectaionComponent implements OnInit {

  listStudents : User[]=[];
  encadrant_id : any;

  constructor(private service:UserService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.encadrant_id = this.activatedRoute.snapshot.paramMap.get('encadrant_id');
    this.loadData();
  }

  loadData() {
    this.service.fetchlistEtudiantsAffectesAEncadrant(this.encadrant_id).subscribe(   
      (data: User[]) => {
        console.log("Response Recieved");
        this.listStudents=data;
      },
      () => console.log("Exception Occured")
    );
  }

  deleteAffectation(etudiant_id: number) {
    this.service.deleteAffectation(this.encadrant_id, etudiant_id).subscribe(
      () => {
        console.log("Data deleted succesfully");
      },
      () => console.log("Error")     
    );

    this.goToListEtudiantPourEncadrantAffectaion(this.encadrant_id);
  }

  goToListEtudiantPourEncadrantAffectaion(encadrant_id : any) {
    console.log("encadrant_id "+encadrant_id);
    this.router.navigate(['/listEtudiantsPourEncadrantAffectaion', encadrant_id]);
  }

}
