import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-rapports',
  templateUrl: './upload-rapports.component.html',
  styleUrls: ['./upload-rapports.component.css']
})
export class UploadRapportsComponent implements OnInit {

  images : any = [];
  allFiles : any = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  fileUploads(event: any) {

    const files = event.target.files;
    console.log(files);
    if(files) {
      for(let i = 0; i < files.length; i++) {
        const image = {
          name : '',
          type : '',
          size : '',
          url : ''
        };
        this.allFiles.push(files[i]);
        image.name = files[i].name;
        image.type = files[i].type;
        image.size = files[i].size;
        const reader = new FileReader();
        reader.onload = (filedata) => {
          image.url =  reader.result + '';
          this.images.push(image);
        };
        reader.readAsDataURL(files[i]);
      }
    }
    event.srcElement.value = null;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  deleteImage() {
    
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  save() {

  }

}
