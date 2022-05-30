import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'chat',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  BACK_ENABLED: boolean = true;

  @Input('messages') messages: any[] = [
    {
      text: 'Lark has a friendly, kind and humorous persona that appeals to seniors, its largest clientele. Users can engage with the chatbot through chat, voice and button options.',
      date: this.getTime(),
      userOwner: false,
      selectOptions: [
        { id: 1, text: 'frequently asked question 1' },
        { id: 2, text: 'frequently asked question 2' },
        { id: 3, text: 'frequently asked question 3' },
      ],
    },
  ];

  textInput: string = '';
  public showChatbot: boolean = false;
  public showMenu: boolean = false;
  public timestamp: string;

  @ViewChild('messagesContainer') container: ElementRef;

  constructor(private chatService: ChatbotService) {}

  ngOnInit() {
    if (localStorage.getItem('history')) {
      this.messages = [...JSON.parse(localStorage.getItem('history'))];
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.messages) {
      console.log(changes);
    }
  }

  ngAfterViewChecked(): void {
    this.scrollBottom();
  }

  onOptionSelect(id: number) {
    this.messages.push({
      text: this.messages[0].selectOptions.find((el) => el.id === id).text,
      date: this.getTime(),
      userOwner: true,
    });
    localStorage.setItem('history', JSON.stringify(this.messages));
  }

  sendMessage() {
    if (this.textInput.length > 0) {
      let newMessage = { text: this.textInput, date: '', userOwner: true };
      newMessage.date = this.getTime();
      this.messages.push(newMessage);
      localStorage.setItem('history', JSON.stringify(this.messages));
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
      setTimeout(() => this.getResponse(newMessage.text), 1000);
      this.textInput = '';
    }
  }

  public onChatbotClick(element: any) {
    if (
      (element.classList.contains('collapse') &&
        !element.classList.contains('menu-item')) ||
      !this.showChatbot
    ) {
      this.showChatbot = !this.showChatbot;
      if (this.showMenu) {
        this.showMenu = false;
      }
      if (!this.timestamp) {
        this.timestamp = this.getTime(true);
      }
    } else {
      this.showMenu = !this.showMenu;
    }
  }

  onDeleteHistory() {
    this.messages = [
      {
        text: 'Lark has a friendly, kind and humorous persona that appeals to seniors, its largest clientele. Users can engage with the chatbot through chat, voice and button options.',
        date: this.getTime(),
        userOwner: false,
        selectOptions: [
          { id: 1, text: 'frequently asked question 1' },
          { id: 2, text: 'frequently asked question 2' },
          { id: 3, text: 'frequently asked question 3' },
        ],
      },
    ];
    localStorage.clear();
  }

  private getResponse(text: string) {
    if (text.includes('hello') || text.includes('hi')) {
      this.messages.push({
        text: 'Hello there!',
        date: this.getTime(),
        userOwner: false,
      });
    }

    localStorage.setItem('history', JSON.stringify(this.messages));
  }

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.sendMessage();
    }
  }

  private getTime(isMainTimestamp?: boolean): string {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    let timestamp = `${hours} : ${minutes}`;

    if (isMainTimestamp) {
      timestamp =
        `${date.getDate()} ${date.toLocaleString('default', {
          month: 'short',
        })}, ` + timestamp;
    }

    return timestamp;
  }

  private scrollBottom(): void {
    this.container.nativeElement.scrollTop =
      this.container.nativeElement.scrollHeight;
  }
}
