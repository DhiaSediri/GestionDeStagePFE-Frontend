import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-edit-by-himself',
  templateUrl: './user-edit-by-himself.component.html',
  styleUrls: ['./user-edit-by-himself.component.css']
})
export class UserEditByHimselfComponent implements OnInit {

  currentUser: any;

  user = new User();

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.user = this.currentUser;
  }

  onSubmit(){
    this.user.role = [this.currentUser.role];
    console.log(this.user);
    this.authService.editUserByHimself(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err?.error?.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
