import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = new User();

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private service : UserService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const test = this.activatedRoute.snapshot.paramMap.get('id');
    if(test != null){
      const id = parseInt(test);
      this.service.fetchUserById(id).subscribe(
        data => {
          console.log("Data update succesfully");
          this.user=data;
        },
        error => console.log("Exception Occured")     
      );
    }   
  }

  onSubmit(){
    
    this.service.addUser(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['listUsers']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  goToList(){
    console.log("Go Back");
    this.router.navigate(['listUsers']);
  }

}
