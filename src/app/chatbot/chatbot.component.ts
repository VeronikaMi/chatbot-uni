import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'chat',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {
  BACK_ENABLED: boolean = true;

  @Input('messages') messages: any[] = [
    {
      text: 'Lark has a friendly, kind and humorous persona that appeals to seniors, its largest clientele. Users can engage with the chatbot through chat, voice and button options.',
      date: this.getTime(),
      userOwner: false,
    },
  ];
  @Input('colorBackRight') colorBackRight: string;
  @Input('colorFontRight') colorFontRight: string;
  @Input('colorBackLeft') colorBackLeft: string;
  @Input('colorFontLeft') colorFontLeft: string;

  textInput: string = '';
  public showChatbot: boolean = false;
  // public showChatbotChange: BehaviorSubject<boolean> =
  //   new BehaviorSubject<boolean>(false);
  public timestamp: string;

  constructor(private chatService: ChatbotService) {}

  ngOnInit() {
    this.colorBackRight ? this.colorBackRight : '#007bff';
    this.colorFontRight ? this.colorFontRight : '#ffffff';
    this.colorBackLeft ? this.colorBackLeft : '#f8f9fa';
    this.colorFontLeft ? this.colorFontLeft : '#343a40';

    // this.showChatbotChange.subscribe((state) => {
    //   this.showChatbot = state;
    //   if (this.showChatbot) {
    //     this.timestamp = this.getTime();
    //   }
    // });
  }

  sendMessage() {
    if (this.textInput.length > 0) {
      let newMessage = { text: this.textInput, date: '', userOwner: true };
      this.messages.push(newMessage);
      let messageBack = { firstname: 'Simon', text: this.textInput };
      // if (this.BACK_ENABLED) {
      //   this.chatService.sendMessage(messageBack).then((res) => {
      //     let messageReturn = {
      //       text: res.json().speech_answer,
      //       date: '',
      //       userOwner: false,
      //     };
      //     this.messages.push(messageReturn);
      //   });
      // }
      this.textInput = '';
    }
  }

  public showChat() {
    this.showChatbot = !this.showChatbot;
    if (!this.timestamp) {
      this.timestamp = this.getTime();
    }
  }

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.sendMessage();
    }
  }

  private getTime(): string {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours} : ${minutes}`;
  }
}
