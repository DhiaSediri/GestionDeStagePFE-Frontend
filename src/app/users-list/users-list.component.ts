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
        this.listUsers=data;
      },
      error => console.log("Exception Occured")
    );
  }

  goToAddUser(){
    this.router.navigate(['/addUser']);
  }

  goToEditUser(id : number){
    console.log("id "+id);
    this.router.navigate(['/editUser/:id', id]);
  }

  goToViewUser(id : number){
    console.log("id "+id);
    this.router.navigate(['viewUser/:id', id]);
  }

  deleteUser(id : number){
    this.service.deleteUserById(id).subscribe(
      data => {
        console.debug("Deleted Successfully");
        //this._router.navigate(['/conventiondestagelist']);
        this.loadData();
      },
      error => {
        console.log("Exception Occured");
        this.loadData();
      }
    );
  }

}
