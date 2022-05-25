import { Component, Input } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'chat',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  BACK_ENABLED: boolean = true;

  @Input('messages') messages: any[] = [
    {
      text: 'Lark has a friendly, kind and humorous persona that appeals to seniors, its largest clientele. Users can engage with the chatbot through chat, voice and button options.',
      date: new Date().getDate(),
      userOwner: false,
    },
  ];
  @Input('colorBackRight') colorBackRight: string;
  @Input('colorFontRight') colorFontRight: string;
  @Input('colorBackLeft') colorBackLeft: string;
  @Input('colorFontLeft') colorFontLeft: string;

  textInput: string = '';

  constructor(private chatService: ChatbotService) {}

  ngOnInit() {
    this.colorBackRight ? this.colorBackRight : '#007bff';
    this.colorFontRight ? this.colorFontRight : '#ffffff';
    this.colorBackLeft ? this.colorBackLeft : '#f8f9fa';
    this.colorFontLeft ? this.colorFontLeft : '#343a40';
  }

  sendMessage() {
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

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.sendMessage();
    }
  }
}
