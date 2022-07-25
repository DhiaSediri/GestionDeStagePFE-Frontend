import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  encadrant_id?: number;
  etudiant_id?: number;

  constructor(private _service:UserService, private _router: Router, private https: HttpClient) { }

  ngOnInit(): void {
    this.loadDataEncadrant();
    this.loadDataEtudiant();
  }

  loadDataEncadrant(): void {

    this._listEncadrant=[];
    this._service.fetchAcademicsSupervisorListFromRemote().subscribe(   
      (data: User[]) => {
        console.log("Response Recieved");
        this._listEncadrant=data;
      },
      () => console.log("Exception Occured")
    );
  }

  loadDataEtudiant(): void {
    this._listEtudiant=[];
    this._service.fetchStudentsListFromRemote().subscribe(   
      (data: User[]) => {
        console.log("Response Recieved");
        this._listEtudiant=data;
      },
      () => console.log("Exception Occured")
    );
  }

  affecter() {
    this._service.addAffectation(this.encadrant_id, this.etudiant_id).subscribe(
      () => {
        console.log("Data add succesfully");
        //this.emailSenderAffectationToEtudiant(this.encadrant_id, this.etudiant_id);
        this.emailSenderAffectationToEncadrant(this.etudiant_id);
      },
      () => console.log("Error")     
    );

    alert('Affectaion completed successfully');
  }

  /*emailSenderAffectationToEtudiant(encadrant_id: number | undefined, etudiant_id: number | undefined) {
    this.https.post<User>('http://localhost:8081/emailSender/getdetailsAffectationToEtudiant', encadrant_id, etudiant_id).subscribe(
      () => {
        console.log(encadrant_id);
        console.log(etudiant_id);
        alert('Email Sent successfully');
      });
  }*/

  emailSenderAffectationToEncadrant(etudiant_id: number | undefined) {
    this.https.post<User>('http://localhost:8081/emailSender/getdetailsAffectationToEncadrant', etudiant_id).subscribe(
      () => {
        console.log(etudiant_id);
        alert('Email Sent successfully');
      });
  }

}
