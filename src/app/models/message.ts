export class Message {
  text: string;
  date: string;
  isUser: boolean;
  userName: string;

  constructor( userName, isUser, date, text) {
    this.userName = userName;
    this.isUser = isUser;
    this.date = date;
    this.text = text;
  }

  ToChatMessage() {
    return {
      date: new Date(this.date),
      reply: this.isUser,
      message: this.text,
      sender: this.userName,
      type: this.text,
      avatar:
        'https://cdn0.iconfinder.com/data/icons/people-occupations-icons-rounded/110/Teacher-512.png'
    };
  }
}
