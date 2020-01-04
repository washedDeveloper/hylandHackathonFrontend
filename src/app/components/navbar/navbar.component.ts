import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserClassesService } from 'src/app/services/user-classes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private userClasses: UserClassesService) {}
  user: User;
  search: string;
  SelectedClass: Classroom;

  ngOnInit() {
    this.user = this.userService.getUser();
    this.SelectedClass = this.user.schedule[0];
 }
}
