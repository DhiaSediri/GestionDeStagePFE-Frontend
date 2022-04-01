import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DocumentsDeStage } from '../_models/documents-de-stage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pdfdocuments-de-stage',
  templateUrl: './create-pdfdocuments-de-stage.component.html',
  styleUrls: ['./create-pdfdocuments-de-stage.component.css']
})
export class CreatePDFDocumentsDeStageComponent {

  dataset: DocumentsDeStage = {
    nom_prenomEtudiant:'',
    optionEtudiant:'',
    nomSociete:'',
    adresseSociete:'',
    telephoneSociete:0,
    emailSociete:'',
    encadrantSociete:'',
    encadrantAcademique:'',
    dateDebutStage: new Date(),
    dateFinStage: new Date()
  };

  constructor(private https: HttpClient, private router: Router) { }

  onSubmit() {
    this.https.post<DocumentsDeStage>('http://localhost:8081/createPDF/getConventionDeStage', this.dataset).subscribe(
      res => {
        this.dataset = res;
        alert('PDF created successfully');
        this.dataset.nom_prenomEtudiant = '';
        this.dataset.optionEtudiant = '';
        this.dataset.nomSociete = '';
        this.dataset. adresseSociete = '';
        this.dataset.telephoneSociete = 0;
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
        this.dataset.telephoneSociete = 0;
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
        this.dataset.telephoneSociete = 0;
        this.dataset.emailSociete = '';
        this.dataset.encadrantSociete = '';
        this.dataset.encadrantAcademique = '';
        this.dataset.dateDebutStage = new Date();
        this.dataset.dateFinStage = new Date();
      });

      this.router.navigate(['/downloadDocumentsDeStage']);
  }

}
