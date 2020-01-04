import { Injectable } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}

  getClasses(): Classroom[] {
    return [
      new Classroom('123',  'science101', '1', 'mr.Bish'),
      new Classroom('124', 'science102', '4', 'mr.Hyland')
    ];
  }
}
