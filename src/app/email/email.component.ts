import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  dataset: Details = {
    name:'',
    age:0,
    country:'',
    email:''
  };

  constructor(private https: HttpClient){ }

  onSubmit() {
    
    this.https.post<Details>('http://localhost:8081/emailSender/getdetails', this.dataset).subscribe(
      res => {
        this.dataset = res;
        console.log(this.dataset);
        alert('Email Sent successfully');
        this.dataset.age = 0;
        this.dataset.name = '';
        this.dataset.country = '';
        this.dataset.email = '';
        
      });
  }
}

interface Details
{
  name:string;
  age:number;
  country:string;
  email:string;

}
