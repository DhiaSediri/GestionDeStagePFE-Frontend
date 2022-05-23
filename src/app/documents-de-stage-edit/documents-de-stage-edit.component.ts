import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsDeStage } from '../_models/documents-de-stage';
import { DocumentsDeStageService } from '../_services/documents-de-stage.service';

@Component({
  selector: 'app-documents-de-stage-edit',
  templateUrl: './documents-de-stage-edit.component.html',
  styleUrls: ['./documents-de-stage-edit.component.css']
})
export class DocumentsDeStageEditComponent implements OnInit {

  dataset: DocumentsDeStage = {
    id:0,
    nom_prenomEtudiant:'',
    emailEtudiant:'',
    optionEtudiant:'',
    nomSociete:'',
    adresseSociete:'',
    telephoneSociete:'',
    emailSociete:'',
    encadrantSociete:'',
    encadrantAcademique:'',
    dateDebutStage: new Date(),
    dateFinStage: new Date()
  };

  constructor(private _service : DocumentsDeStageService, private https: HttpClient, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    const test = this._activatedRoute.snapshot.paramMap.get('id');
    if(test != null){
      const id = parseInt(test);
      this._service.fetchDocumentsDeStageByIdFromRemote(id).subscribe(
        (data: any) => {
          console.log("Data update succesfully");
          this.dataset=data;
        },
        () => console.log("Exception Occured")     
      );
    }   
  }

  createPDFDemandeDeStage() {

    this.https.post<DocumentsDeStage>('http://localhost:8081/createPDF/creerDossierDocumentsDeStage', this.dataset).subscribe(
      () => console.log("The folder has been created"),
      () => console.log("Error")     
    );

    this.https.post<DocumentsDeStage>('http://localhost:8081/createPDF/getConventionDeStage', this.dataset).subscribe(
      res => {
        this.dataset = res;
        alert('PDF created successfully');
        this.dataset.nom_prenomEtudiant = '';
        this.dataset.emailEtudiant = '';
        this.dataset.optionEtudiant = '';
        this.dataset.nomSociete = '';
        this.dataset. adresseSociete = '';
        this.dataset.telephoneSociete = '';
        this.dataset.emailSociete = '';
        this.dataset.encadrantSociete = '';
        this.dataset.encadrantAcademique = '';
        this.dataset.dateDebutStage = new Date();
        this.dataset.dateFinStage = new Date();
      });

      this.https.post<DocumentsDeStage>('http://localhost:8081/createPDF/getDemandeDeStage', this.dataset).subscribe(
      res => {
        this.dataset = res;
        alert('PDF created successfully');
        this.dataset.nom_prenomEtudiant = '';
        this.dataset.emailEtudiant = '';
        this.dataset.optionEtudiant = '';
        this.dataset.nomSociete = '';
        this.dataset. adresseSociete = '';
        this.dataset.telephoneSociete = '';
        this.dataset.emailSociete = '';
        this.dataset.encadrantSociete = '';
        this.dataset.encadrantAcademique = '';
        this.dataset.dateDebutStage = new Date();
        this.dataset.dateFinStage = new Date();
      });

      this.https.post<DocumentsDeStage>('http://localhost:8081/createPDF/getLettreAffectationStage', this.dataset).subscribe(
      res => {
        this.dataset = res;
        alert('PDF created successfully');
        this.dataset.nom_prenomEtudiant = '';
        this.dataset.emailEtudiant = '';
        this.dataset.optionEtudiant = '';
        this.dataset.nomSociete = '';
        this.dataset. adresseSociete = '';
        this.dataset.telephoneSociete = '';
        this.dataset.emailSociete = '';
        this.dataset.encadrantSociete = '';
        this.dataset.encadrantAcademique = '';
        this.dataset.dateDebutStage = new Date();
        this.dataset.dateFinStage = new Date();
      });

  }

  updateDocumentsDeStageFormSubmit(){
    
    this._service.addDocumentsDeStageToRemote(this.dataset).subscribe(
      () => {
        console.log("Data update succesfully");
        this._router.navigate(['listDocumentsDeStage']);
      },
      () => console.log("Error")     
    );
    this.createPDFDemandeDeStage();
    this._router.navigate(['/downloadDocumentsDeStage']);
  }

  goToList(){
    console.log("Go Back");
    this._router.navigate(['listDocumentsDeStage']);
  }

}
