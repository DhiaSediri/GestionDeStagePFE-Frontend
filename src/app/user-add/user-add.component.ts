import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';

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

  constructor(private authService: AuthService, private router: Router) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void { }

  onSubmit(): void {
    //console.log(this.form);
    console.log(this.form.value);
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
        this.router.navigate(['listUser']);
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
