import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { NbChatModule } from '@nebular/theme';
import { Message } from 'src/app/models/message';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  id: string;
  messages: any[];
  constructor(private chat: ChatService,private userService: UserService) {}

  ngOnInit() {
    this.chat.id.subscribe({ next: id => (this.id = this.userService.getClassByID(id).ClassName) });
    this.chat.initMockData();
    this.messages = this.chat.getMessages('class1d');

    console.log(this.userService.getClassByID(this.id));
  }

  sendMessage($event){
    this.chat.sendChat("ben Anderson",$event.message);

    this.messages.push( (new Message("ben Anderson", true, Date.now(), $event.message)).ToChatMessage());

  }
}
