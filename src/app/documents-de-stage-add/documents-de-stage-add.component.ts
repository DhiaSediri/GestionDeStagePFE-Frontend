import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsDeStage } from '../_models/documents-de-stage';
import { DocumentsDeStageService } from '../_services/documents-de-stage.service';

@Component({
  selector: 'app-documents-de-stage-add',
  templateUrl: './documents-de-stage-add.component.html',
  styleUrls: ['./documents-de-stage-add.component.css']
})
export class DocumentsDeStageAddComponent implements OnInit {

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

  constructor(private _service:DocumentsDeStageService, private https: HttpClient, private _router: Router) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  createPDFDemandeDeStage() {

    this.https.post<DocumentsDeStage>('http://localhost:8081/createPDF/creerDossierDocumentsDeStage', this.dataset).subscribe(
      () => console.log("The folder has been created"),
      () => console.log("Error")     
    );

    this.https.post<DocumentsDeStage>('http://localhost:8081/createPDF/getConventionDeStage', this.dataset).subscribe(
      res => {
        this.dataset = res;
        //alert('PDF created successfully');
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
        //alert('PDF created successfully');
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
        //alert('PDF created successfully');
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

  emailSenderAddDemandeDeStageToAdmin(documentsDeStage: DocumentsDeStage) {
    this.https.post<DocumentsDeStage>('http://localhost:8081/emailSender/getdetailsAddDemandeDeStageToAdmin', documentsDeStage).subscribe(
      res => {
        console.log(documentsDeStage);
        //alert('Email Sent successfully');
      });
  }

  addDocumentsDeStageFormSubmit(){

    this._service.verifierDureeDeStage(this.dataset).subscribe(
      (test:any) => {

        if(test == true){
          console.log("la durée du stage est valide");

          this._service.addDocumentsDeStageToRemote(this.dataset).subscribe(
            () => {
              console.log("Data add succesfully");
              this.createPDFDemandeDeStage();
              this.emailSenderAddDemandeDeStageToAdmin(this.dataset);
              alert('Cette opération a été effectuée avec succès');
              this._router.navigate(['/downloadDocumentsDeStage', this.dataset.emailEtudiant]);             
            },
            () => console.log("Error")     
          );
        } 
        
        if(test == false){
          console.log("la durée du stage est invalide")
          alert('La durée du stage ingénieur doit être supèrieure ou égale à 6 mois');
        }
      }
    );
  }

}
