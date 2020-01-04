import { Classroom } from './classroom';

export class User {
  UserID: string;
  Username: string;
  Password: string;
  Name: string;
  Email: string;
  SchoolID: string;
  schedule: Classroom[];
}
