import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user = new User();

  constructor(private service : UserService, private router : Router, private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    const test = this._activatedRoute.snapshot.paramMap.get('id');
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

  goToList(){
    console.log("Go Back");
    this.router.navigate(['listUser']);
  }

}
