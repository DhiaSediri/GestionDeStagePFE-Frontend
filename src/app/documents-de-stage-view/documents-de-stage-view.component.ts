import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsDeStage } from '../_models/documents-de-stage';
import { DocumentsDeStageService } from '../_services/documents-de-stage.service';

@Component({
  selector: 'app-documents-de-stage-view',
  templateUrl: './documents-de-stage-view.component.html',
  styleUrls: ['./documents-de-stage-view.component.css']
})
export class DocumentsDeStageViewComponent implements OnInit {

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

  goToList(){
    console.log("Go Back");
    this._router.navigate(['listDocumentsDeStage']);
  }

}
