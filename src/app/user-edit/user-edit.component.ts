import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
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

  constructor(private service : UserService, private authService: AuthService, private router : Router, private activatedRoute : ActivatedRoute, private https: HttpClient) { }

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

  emailSender(user: User) {
    this.https.post<User>('http://localhost:8081/emailSender/getdetailsAddUser', user).subscribe(
      res => {
        console.log(user);
        alert('Email Sent successfully');
      });
  }

  onSubmit(){
    
    this.user.role = [this.user.role];
    console.log(this.user);
    this.authService.editUser(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['listUser']);
        this.emailSender(this.user);
      },
      err => {
        this.errorMessage = err?.error?.message;
        this.isSignUpFailed = true;
      }
    );
  }

  goToList(){
    console.log("Go Back");
    this.router.navigate(['listUser']);
  }

}
