import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-affectation-add',
  templateUrl: './affectation-add.component.html',
  styleUrls: ['./affectation-add.component.css']
})
export class AffectationAddComponent implements OnInit {

  _listEncadrant : User[]=[];
  _listEtudiant : User[]=[];
  encadnat = new User();
  etudiant = new User();

  constructor(private _service:UserService) { }

  ngOnInit(): void {
    this.loadDataEncadrant();
    this.loadDataEtudiant();
  }

  loadDataEncadrant(): void {

    this._listEncadrant=[];
    this._service.fetchAcademicSupervisorListFromRemote().subscribe(   
      (data: User[]) => {
        console.log("Response Recieved");
        this._listEncadrant=data;
      },
      () => console.log("Exception Occured")
    );
  }

  loadDataEtudiant(): void {

    this._listEtudiant=[];
    this._service.fetchStudentListFromRemote().subscribe(   
      (data: User[]) => {
        console.log("Response Recieved");
        this._listEtudiant=data;
      },
      () => console.log("Exception Occured")
    );
  }

  Affecter() {
    this._service.addAffectation(this.encadnat.id, this.etudiant.id).subscribe(
      () => {
        console.log("Data add succesfully");
      },
      () => console.log("Error")     
    );
  }

}
