import { Injectable } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  data: any;
   getData() {
    return JSON.parse(`{
      "link" : "localhost:3000/user/9e86da29-66dd-4d17-af3d-10de5ab576a3",
      "userDetails": {
          "username": "mhyland",
          "name": "Matt Hyland",
          "email": "mhyland@gmail.com",
          "School": {
              "name": "Bay High School",
              "address": "123 Address Rd."
          },
          "Classes": [
              {
                  "classID": "9fa01e11-1667-4709-89a4-4da3d37a7895",
                  "className": "Physics",
                  "assignments": [
                      {
                          "AssignmentID": "c584b69b-a92c-468a-ae95-9eda9e849d9a",
                          "ClassID": "9fa01e11-1667-4709-89a4-4da3d37a7895",
                          "UserCreatedID": "9e86da29-66dd-4d17-af3d-10de5ab576a3",
                          "DateCreated": 1578180521751,
                          "DueDate": 1578180521751,
                          "Title": "Motion Lab",
                          "Description": "Explore Newtons Laws of Motion and prepare an essay to turn in."
                      },
                      {
                          "AssignmentID": "fb4c799a-5c2a-4aac-b0e3-5cba0a2b88cf",
                          "ClassID": "9fa01e11-1667-4709-89a4-4da3d37a7895",
                          "UserCreatedID": "9e86da29-66dd-4d17-af3d-10de5ab576a3",
                          "DateCreated": 1578180582445,
                          "DueDate": 1578180582445,
                          "Title": "Kinematics Worksheet",
                          "Description": "Used the equations from class to model the movement of real life objects"
                      },
                      {
                          "AssignmentID": "ce26c875-2061-4169-941f-d9e21d603d0b",
                          "ClassID": "9fa01e11-1667-4709-89a4-4da3d37a7895",
                          "UserCreatedID": "9e86da29-66dd-4d17-af3d-10de5ab576a3",
                          "DateCreated": 1578180653867,
                          "DueDate": 1578180653867,
                          "Title": "Electricity Worksheet",
                          "Description": "Find the current, voltage, and resistance of the 9 circuits"
                      },
                      {
                          "AssignmentID": "736902f4-b488-4b66-8fd3-e76d053916d7",
                          "ClassID": "9fa01e11-1667-4709-89a4-4da3d37a7895",
                          "UserCreatedID": "9e86da29-66dd-4d17-af3d-10de5ab576a3",
                          "DateCreated": 1578180713906,
                          "DueDate": 1578180713906,
                          "Title": "Gravity Worksheet",
                          "Description": "Use the variables below to solve for the gravitational attraction between the objects"
                      },
                      {
                          "AssignmentID": "623cfea5-a988-43ac-813a-76b01d4fa4f0",
                          "ClassID": "9fa01e11-1667-4709-89a4-4da3d37a7895",
                          "UserCreatedID": "9e86da29-66dd-4d17-af3d-10de5ab576a3",
                          "DateCreated": 1578180770384,
                          "DueDate": 1578180770384,
                          "Title": "Explore Learning Gizmo",
                          "Description": "Explore the gizmo and complete the packet"
                      }
                  ],
                  "links": [
                      {
                          "Name": "Explore Learning Gizmo Lab",
                          "Url": "https://www.explorelearning.com/"
                      },
                      {
                          "Name": "Mastering Physics",
                          "Url": "https://www.masteringphysics.com/site/login.html"
                      },
                      {
                          "Name": "Classroom",
                          "Url": "https://classroom.google.com"
                      }
                  ]
              },
              {
                  "classID": "15b66a99-3587-41f0-874a-c7a35419e8bd",
                  "className": "AP Lit",
                  "assignments": [],
                  "links": []
              },
              {
                  "classID": "a678a053-e256-496b-ace1-ca6ed6e2f32c",
                  "className": "Acting",
                  "assignments": [],
                  "links": []
              },
              {
                  "classID": "de194300-3724-4c06-b46f-b7c66bb811fb",
                  "className": "Honors Choir",
                  "assignments": [],
                  "links": []
              },
              {
                  "classID": "3bb5be75-8158-4495-b42f-9b5702afa303",
                  "className": "AP Euro",
                  "assignments": [],
                  "links": []
              }
          ],
          "Notes": [
              {
                  "NoteID": "e4b371c9-d331-497e-a6b5-190fe337c1c3",
                  "Contents": "Newtons first law states that every object will remain at rest or in uniform motion in a straight line unless compelled to change its state by the action of an external force.",
                  "Title": "Newtons First Law"
              },
              {
                  "NoteID": "0756b844-c877-43e7-9877-08791eadbe1d",
                  "Contents": "The second law explains how the velocity of an object changes when it is subjected to an external force. The law defines a force to be equal to change in momentum (mass times velocity) per change in time.",
                  "Title": "Newtons Second Law"
              },
              {
                  "NoteID": "1fc0a29b-b5bb-4a53-8fea-4b20ebe621a1",
                  "Contents": "The third law states that for every action (force) in nature there is an equal and opposite reaction.",
                  "Title": "Newtons Third Law"
              }
          ]
      }
  }`)
  }


}
