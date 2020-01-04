import { Asignment } from './asignment';
import { Link } from './link';

export class Classroom {
  classID: string;

  ClassName: string;
  Period: string;
  Teacher: string;
  Asignments: Asignment[];
  Links: Link[];
  constructor(classID, ClassName, Period, Teacher) {
    this.classID = classID;

    this.ClassName = ClassName;
    this.Period = Period;
    this.Teacher = Teacher;
  }
}
