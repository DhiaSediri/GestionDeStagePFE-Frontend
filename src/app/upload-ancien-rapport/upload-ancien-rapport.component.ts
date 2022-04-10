import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-ancien-rapport',
  templateUrl: './upload-ancien-rapport.component.html',
  styleUrls: ['./upload-ancien-rapport.component.css']
})
export class UploadAncienRapportComponent {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  fileUploads(event: any) {

    const files = event.target.files;
    console.log(files);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  save() {

  }

}
