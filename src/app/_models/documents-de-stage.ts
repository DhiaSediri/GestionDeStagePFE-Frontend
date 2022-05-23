export class DocumentsDeStage {

    id:number;
    nom_prenomEtudiant?:string;
    emailEtudiant?:string;
    optionEtudiant?:string;
    nomSociete?:string;
    adresseSociete?:string;
    telephoneSociete?:string;
    emailSociete?:string;
    encadrantSociete?:string;
    encadrantAcademique?:string;
    dateDebutStage?:Date;
    dateFinStage?:Date;
    dateDemande?:Date;
    etatDemande?:string;

    constructor(id: number){
		this.id = id;
	}
}
