import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myUser: User;
  constructor() { }

  getUser() {
    return this.myUser;
  }
}
