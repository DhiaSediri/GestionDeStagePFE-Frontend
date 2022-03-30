import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-academic-supervisor',
  templateUrl: './board-academic-supervisor.component.html',
  styleUrls: ['./board-academic-supervisor.component.css']
})
export class BoardAcademicSupervisorComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAcademicSupervisorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
