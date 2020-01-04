import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserClassesService } from 'src/app/services/user-classes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService, private userClasses: UserClassesService) {}
  name: string;
  search: string;
  qotd = 'live, laugh, love ;)';
  ngOnInit() {
    this.name = this.userService.getUserName();
    this.userClasses.setCurrentClass(null);
  }
  SearchGoogle() {
    const url = 'https://www.google.com/search?q=' + this.search;
    window.open(url, '_blank');

  }
}
