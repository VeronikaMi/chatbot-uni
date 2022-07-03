import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'chat',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit, AfterViewChecked, OnDestroy {
  @Input() darkBackground: Subject<boolean> = new Subject<boolean>();
  @Input('messages') messages: Message[] = [];
  public changeColor: boolean = false;
  private subscription: Subscription;
  private initialMessage: Message = {
    text: '',
    date: this.getTime(),
    userOwner: false,
    selectOptions: [],
  };

  public textInput: string = '';
  public showChatbot: boolean = false;
  public showMenu: boolean = false;
  public timestamp: string;
  public showPopupMsg: boolean = true;

  @ViewChild('messagesContainer') container: ElementRef;

  constructor(private chatService: ChatbotService) {}

  public ngOnInit(): void {
    this.getInitialMessage();
    this.messages = [this.initialMessage];

    if (localStorage.getItem('history')) {
      this.messages = [...JSON.parse(localStorage.getItem('history'))];
    }

    this.subscription = this.darkBackground.subscribe((value) => {
      this.changeColor = value;
    });
  }

  public ngAfterViewChecked(): void {
    this.scrollBottom();
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public onOptionSelect(id: number): void {
    this.messages.push({
      text: this.messages[0].selectOptions.find((el) => el.id === id).text,
      date: this.getTime(),
      userOwner: true,
    });

    setTimeout(
      () =>
        this.getResponse(
          this.messages[0].selectOptions.find((el) => el.id === id).text
        ),
      1000
    );

    localStorage.setItem('history', JSON.stringify(this.messages));
  }

  public sendMessage(): void {
    if (this.textInput.length > 0) {
      let newMessage = { text: this.textInput, date: '', userOwner: true };
      newMessage.date = this.getTime();
      this.messages.push(newMessage);
      localStorage.setItem('history', JSON.stringify(this.messages));

      if (new RegExp('[ა-ჰ]').test(this.textInput)) {
        setTimeout(() => this.getResponse(newMessage.text), 1000);
      } else {
        setTimeout(() => {
          this.messages.push({
            text: 'გთხოვთ გამოიყენოთ ქართული ენა',
            date: this.getTime(),
            userOwner: false,
          });
          localStorage.setItem('history', JSON.stringify(this.messages));
        }, 1000);
      }

      this.textInput = '';
    }
  }

  public onChatbotClick(element: any): void {
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

    if (this.showPopupMsg) {
      this.showPopupMsg = false;
    }
  }

  public onDeleteHistory(): void {
    this.messages = [this.initialMessage];
    localStorage.clear();
  }

  public onKey(event: any): void {
    if (event.keyCode == 13) {
      this.sendMessage();
    }
  }

  private getResponse(text: string): void {
    const formData = new FormData();
    formData.append('question', text);

    this.chatService.getResponse(formData).subscribe((response: any) => {
      this.messages.push({
        text: response.answer,
        date: this.getTime(),
        userOwner: false,
      });
      localStorage.setItem('history', JSON.stringify(this.messages));
    });
  }

  private getInitialMessage(): void {
    this.chatService.getInitMessage().subscribe((response: string) => {
      this.initialMessage.text = response;
    });

    this.chatService.getSelections().subscribe((response: string[]) => {
      this.initialMessage.selectOptions = response.map((el, index) => ({
        id: index + 1,
        text: el,
      }));
    });
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

export class Message {
  text: string;
  date: string;
  userOwner: boolean;
  selectOptions?: { id: number; text: string }[];
}
