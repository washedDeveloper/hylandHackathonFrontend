import { Asignment } from './asignment';
import { Link } from './link';

export class Classroom {
  classID: string;
  SchoolID: string;
  ClassName: string;
  Period: string;
  Teacher: string;
  Asignments: Asignment[];
  Links: Link[];
  constructor(classID, schoolID, ClassName, Period, Teacher) {
    this.classID = classID;
    this.SchoolID = schoolID;
    this.ClassName = ClassName;
    this.Period = Period;
    this.Teacher = Teacher;
  }
}
