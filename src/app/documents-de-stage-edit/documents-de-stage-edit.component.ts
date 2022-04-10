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

  documentsDeStage = new DocumentsDeStage(0);

  constructor(private _service : DocumentsDeStageService, private _router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    const test = this._activatedRoute.snapshot.paramMap.get('id');
    if(test != null){
      const id = parseInt(test);
      this._service.fetchDocumentsDeStageByIdFromRemote(id).subscribe(
        (data: any) => {
          console.log("Data update succesfully");
          this.documentsDeStage=data;
        },
        () => console.log("Exception Occured")     
      );
    }   
  }

  updateDocumentsDeStageFormSubmit(){
    
    this._service.addDocumentsDeStageToRemote(this.documentsDeStage).subscribe(
      () => {
        console.log("Data update succesfully");
        this._router.navigate(['listDocumentsDeStage']);
      },
      () => console.log("Error")     
    );
  }

  goToList(){
    console.log("Go Back");
    this._router.navigate(['listDocumentsDeStage']);
  }

}
