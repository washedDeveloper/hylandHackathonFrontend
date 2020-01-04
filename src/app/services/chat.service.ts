import { Injectable } from '@angular/core';
import { Classroom } from '../models/classroom';
import { Observable, Subject } from 'rxjs';
import { NbChatMessageComponent } from '@nebular/theme';
import { Message } from '../models/message';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() {}
  id = new Subject<string>();
  messages;
  changeSelectedChat(classid: string) {
    this.id.next(classid);
  }

  initMockData() {
      this.messages =  new Array<Message>(6);
      this.messages[0] = new Message(
        'Bob Ross',
        'false',
        '1577914185000',
        'Did anyone do the homework last night?'
      );
      this.messages[1] = new Message(
        'Ben Anderson',
        'true',
        '1577917785000',
        'Of Course! it was a bit tough.'
      );
      this.messages[2] = new Message(
        'Jaimie Bish',
        'false',
        '1577863785000',
        'I was having trouble with problem 6'
      );
      this.messages[3] = new Message(
        'Jaimie Bish',
        'false',
        '1577863785000',
        'I was having trouble with problem 6'
      );
      this.messages[4] = new Message(
        'Jaimie Bish',
        'false',
        '1577863785000',
        'I was having trouble with problem 6'
      );
      this.messages[5] = new Message(
        'Jaimie Bish',
        'false',
        '1577863785000',
        'I was having trouble with problem 6'
      );
      this.messages[6] = new Message(
        'Matt Hamil',
        'false',
        '1577864745000',
        'You have to use the new formula we learned in class'
      );

  }
  getMessages(classid): any[] {
    const returnArray = new Array<any>(0);
    this.messages.forEach(element => {
      returnArray.push(element.ToChatMessage());
    });
    return returnArray;
  }
  sendChat(name , message){
    this.messages.push(new Message(name, true, Date.now(), message));
  }
}
