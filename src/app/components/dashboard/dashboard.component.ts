import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserClassesService } from 'src/app/services/user-classes.service';
import { User } from 'src/app/models/user';
import { Classroom } from 'src/app/models/classroom';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService, private userClasses: UserClassesService) {}
  user: User;
  search: string;
  SelectedClass: Classroom;

  ngOnInit() {
    this.user = this.userService.getUser();
    this.SelectedClass = this.user.schedule[0];
 }
  SearchGoogle() {
    const url = 'https://www.google.com/search?q=' + this.search;
    window.open(url, '_blank');

  }
}
