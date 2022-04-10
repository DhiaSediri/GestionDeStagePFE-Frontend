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

  documentsDeStage = new DocumentsDeStage(0);

  constructor(private _service:DocumentsDeStageService, private _router: Router) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  addDocumentsDeStageFormSubmit(){
    
    this._service.addDocumentsDeStageToRemote(this.documentsDeStage).subscribe(
      () => {
        console.log("Data add succesfully");
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
