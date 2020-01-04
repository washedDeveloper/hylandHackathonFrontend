import { Injectable } from '@angular/core';
import { Classroom } from '../models/classroom';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserClassesService {

  constructor(private api: ApiService) {this.classes =  this.api.getClasses(); }

  classes: Classroom[];
  currentClass: Classroom;

  getCurrentClass(): Classroom {
    return this.currentClass;
  }
  setCurrentClass(newClassroom: Classroom) {
    this.currentClass = newClassroom;
  }
  getClassList(): Classroom[] {
    return this.classes;
  }
}
