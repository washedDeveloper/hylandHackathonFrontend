import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Classroom } from '../models/classroom';
import { Asignment } from '../models/asignment';
import { Link } from '../models/link';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myUser: User;

  constructor() {
    this.mockUserData();
  }

  getUser() {
    this.myUser.schedule.sort((a, b) => (+(a.Period)) - (+(b.Period)) );
    return this.myUser;
  }
  getClassByID(id){
    return this.myUser.schedule.find(element => element.ClassName === id);
  }

  mockUserData() {
    const benSchedule = new Array<Classroom>(5);
    this.myUser = new User();
    this.myUser.Name = 'Ben Anderson';
    this.myUser.Email = 'ben.perfect.tennis@ben.com';
    this.myUser.Password = 'alabama';
    this.myUser.Username = 'banderson';
    this.myUser.UserID = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';
    this.myUser.SchoolID = '1b671a64-40d5-491e-99b0-da01ff1f3341';

    benSchedule[0] = new Classroom(
      '43bee0d0-2f1d-11ea-978f-2e728ce88125',
      'French 204',
      '1',
      'Mr.Ricketts'
    );
    benSchedule[1] = new Classroom(
      '43bee332-2f1d-11ea-978f-2e728ce88125',
      'Calculus 315',
      '2',
      'Mr.Martin'
    );
    benSchedule[2] = new Classroom(
      '43bee490-2f1d-11ea-978f-2e728ce88125',
      'Physics 402',
      '3',
      'Mrs.Balas'
    );
    benSchedule[3] = new Classroom(
      '43bee5d0-2f1d-11ea-978f-2e728ce88125',
      'Honors Choir',
      '4',
      'Mr.Allen'
    );
    benSchedule[4] = new Classroom(
      '43bee710-2f1d-11ea-978f-2e728ce88125',
      'European History 202',
      '5',
      'Ms.Peters'
    );

    benSchedule[0].Asignments = new Array<Asignment>(2);
    benSchedule[0].Asignments[0] = new Asignment(
      '880e541c-2f1f-11ea-978f-2e728ce88125',
      'Verb Packet',
      'Complete questions 4,6,7,9,14,22 with the use of your notes',
      '1578594405000'
    );
    benSchedule[0].Asignments[1] = new Asignment(
      '880e541c-2f1f-11ea-978f-2e728ce88125',
      'Adjective Worksheet',
      'Finish entire worksheet with partner if not finished in classd',
      '1578335205000'
    );
    benSchedule[0].Links = new Array<Link>(4);
    benSchedule[0].Links[0] = new Link('Google', 'https://www.google.com/');
    benSchedule[0].Links[1] = new Link(
      'Grades',
      'https://www.wlake.org/about-us/powerschool'
    );
    benSchedule[0].Links[2] = new Link(
      'French Helper',
      'https://conjugator.reverso.net/conjugation-french.html'
    );
    benSchedule[0].Links[3] = new Link(
      'France News',
      'https://www.france24.com/en/france/'
    );

    this.myUser.schedule = benSchedule;
  }
}
