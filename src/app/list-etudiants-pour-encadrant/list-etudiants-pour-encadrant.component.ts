import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-list-etudiants-pour-encadrant',
  templateUrl: './list-etudiants-pour-encadrant.component.html',
  styleUrls: ['./list-etudiants-pour-encadrant.component.css']
})
export class ListEtudiantsPourEncadrantComponent implements OnInit {

  currentUser: any;

  listStudents: User[]=[];

  constructor(private service:UserService, private router: Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.loadData();
  }

  loadData(): void {
    console.log(this.currentUser.id);
    this.listStudents=[];
    this.service.fetchlistEtudiantsAffectesAEncadrant(this.currentUser.id).subscribe(   
      data => {
        console.log("Response Recieved");
        console.log(data);
        this.listStudents=data;
      },
      error => console.log("Exception Occured")
    );
  }

  goToEncadrantDepot(id : number, email : string | undefined){
    console.log("id "+id);
    console.log("email "+email);
    this.router.navigate(['/encadrantDepot', id, email]);
  }

}
