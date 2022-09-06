import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private https: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void { }

  emailSender(user: User) {
    this.https.post<User>('http://localhost:8081/emailSender/getdetailsAddUser', user).subscribe(
      res => {
        console.log(user);
        //alert('Email Sent successfully');
      });
  }

  onSubmit(): void {
    
    const user =  new User();
    user.username = this.form.username;
    user.email = this.form.email;
    user.password = this.form.password;
    user.role = [this.form.role];
    console.log(user);
    this.authService.addUser(user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert('Cette opération a été effectuée avec succès');
        this.router.navigate(['listUser']);
        this.emailSender(user);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  goToList(){
    console.log("Go Back");
    this.router.navigate(['listUser']);
  }

}
