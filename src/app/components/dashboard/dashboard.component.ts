import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }
  name: string;
  qotd = "live, laugh, love ;)";
  ngOnInit() {
    this.name = this.userService.getUserName();
  }
  SearchGoogle() {

  }

}
