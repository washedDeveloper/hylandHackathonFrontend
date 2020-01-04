import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myUser: User;
  constructor() { }
  getUserName(): string {
    return "bob";
    return this.myUser.Name;
  }
}
