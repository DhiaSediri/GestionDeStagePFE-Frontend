import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DocumentsDeStage } from '../_models/documents-de-stage';
import { Router } from '@angular/router';
import { DocumentsDeStageService } from '../_services/documents-de-stage.service';

@Component({
  selector: 'app-create-pdfdocuments-de-stage',
  templateUrl: './create-pdfdocuments-de-stage.component.html',
  styleUrls: ['./create-pdfdocuments-de-stage.component.css']
})
export class CreatePDFDocumentsDeStageComponent {

  dataset: DocumentsDeStage = {
    id:0,
    nom_prenomEtudiant:'',
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

  constructor(private https: HttpClient, private router: Router, private documentsDeStageService: DocumentsDeStageService) { }

  onSubmit() {

    this.documentsDeStageService.addDocumentsDeStageToRemote(this.dataset).subscribe(
      () => {
        console.log("Data add succesfully");
      },
      () => console.log("Error")     
    );
    
    this.https.post<DocumentsDeStage>('http://localhost:8081/createPDF/getConventionDeStage', this.dataset).subscribe(
      res => {
        this.dataset = res;
        alert('PDF created successfully');
        this.dataset.nom_prenomEtudiant = '';
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

      this.router.navigate(['/downloadDocumentsDeStage']);
  }

}
