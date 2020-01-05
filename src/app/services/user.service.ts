import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Classroom } from "../models/classroom";
import { Asignment } from "../models/asignment";
import { Link } from "../models/link";
import { ApiService } from "./api/api.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  myUser: User;

  constructor(public api: ApiService) {
    this.mockUserData();
  }

  getUser() {
    return this.myUser;
  }
  getClassByID(id) {
    return this.myUser.schedule.find(element => element.ClassName === id);
  }

  mockUserData() {
    const mattSchedule = new Array<Classroom>(0);
    this.myUser = new User();
    this.myUser.Name = this.api.getData().userDetails.name;
    this.myUser.Email = this.api.getData().userDetails.email;
    this.myUser.Username = this.api.getData().userDetails.Username;
    this.myUser.UserID = "9e86da29-66dd-4d17-af3d-10de5ab576a3";
    this.myUser.schedule = new Array<Classroom>(0);
    this.api.getData().userDetails.Classes.forEach(e => {
      const class1 = new Classroom(e.classID, e.className, "1", "");
      class1.Asignments = new Array<Asignment>(0);
      class1.Links = new Array<Link>(0);
      if (e.assignments.length > 0) {
        e.assignments.forEach(r => {
          const assign = new Asignment(
            r.AssignmentID,
            r.Title,
            r.Description,
            r.DueDate
          );
          class1.Asignments.push(assign);
        });
      }
      if (e.links) {
        e.links.forEach(l => {
          const lnk = new Link(l.Name, l.Url);
          class1.Links.push(lnk);
        });
      }
      this.myUser.schedule.push(class1);
    });
  }
}
