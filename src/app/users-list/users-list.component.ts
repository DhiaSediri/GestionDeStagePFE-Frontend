import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  mots_cles?: string;

  listUsers: User[]=[];

  constructor(private service:UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.listUsers=[];
    this.service.fetchListUsers().subscribe(   
      data => {
        console.log("Response Recieved");
        console.log(data);
        this.listUsers=data;
      },
      error => console.log("Exception Occured")
    );
  }

  fetchListUsersParRecherche(): void {
    this.listUsers=[];
    this.service.fetchListUsersParRechercheFromRemote(this.mots_cles).subscribe(   
      (data: User[]) => {
        console.log("Response Recieved");
        this.listUsers=data;
      },
      () => console.log("Exception Occured")
    );
  }

  goToAddUser(){
    this.router.navigate(['/addUser']);
  }

  goToEditUser(id : number){
    console.log("id "+id);
    this.router.navigate(['/editUser', id]);
  }

  goToViewUser(id : number){
    console.log("id "+id);
    this.router.navigate(['/viewUser', id]);
  }

  deleteUser(id : number){
    this.service.deleteUserById(id).subscribe(
      data => {
        console.debug("Deleted Successfully");
        alert('Cette opération a été effectuée avec succès');
        this.loadData();
      },
      error => {
        console.log("Exception Occured");
        this.loadData();
      }
    );
  }

}
