import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserClassesService } from 'src/app/services/user-classes.service';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private chatserve:ChatService,private userService: UserService, private userClasses: UserClassesService,public router: Router) {}
  user: User;
  search: string;
  SelectedClass: Classroom;

  ngOnInit() {
    this.user = this.userService.getUser();
    this.SelectedClass = this.user.schedule[0];
 }
 chat(id?) {
  if (id) {
    this.chatserve.changeSelectedChat(id);
    this.router.navigate(['/chat']);
  }
  else {
    this.chatserve.changeSelectedChat(this.user.schedule[0].ClassName);
    this.router.navigate(['/chat']);
  }
 }
}
