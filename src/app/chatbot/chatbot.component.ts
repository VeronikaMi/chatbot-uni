import { HttpClient } from '@angular/common/http';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
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
  public changeColor: boolean = false;
  private subscription: Subscription;
  private initialMessage = {
    text: 'გამარჯობა, მე ბანკის ციფრული ასისტენტი ვარ. ბანკის ოპერატორის მსგავსად, პასუხის გაცემა მეც მყისიერად შემიძლია. მთავარია, რაც გაინტერესებთ, მოკლედ აღწეროთ და ისე მომწეროთ',
    date: this.getTime(),
    userOwner: false,
    selectOptions: [
      { id: 1, text: 'როგორ გადავრიცხო თანხა?' },
      { id: 2, text: 'როგორ დავბლოკო ბარათი?' },
      { id: 3, text: 'როგორ ავიღო სესხი?' },
    ],
  };

  @Input('messages') messages: any[] = [this.initialMessage];

  textInput: string = '';
  public showChatbot: boolean = false;
  public showMenu: boolean = false;
  public timestamp: string;

  @ViewChild('messagesContainer') container: ElementRef;

  constructor(private chatService: ChatbotService, private http: HttpClient) {}

  ngOnInit() {
    if (localStorage.getItem('history')) {
      this.messages = [...JSON.parse(localStorage.getItem('history'))];
    }

    this.subscription = this.darkBackground.subscribe((value) => {
      this.changeColor = value;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.messages) {
      console.log(changes);
    }
  }

  ngAfterViewChecked(): void {
    this.scrollBottom();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onOptionSelect(id: number) {
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

  sendMessage() {
    if (this.textInput.length > 0) {
      let newMessage = { text: this.textInput, date: '', userOwner: true };
      newMessage.date = this.getTime();
      this.messages.push(newMessage);
      localStorage.setItem('history', JSON.stringify(this.messages));
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
    this.messages = [this.initialMessage];
    localStorage.clear();
  }

  private getResponse(text: string) {
    const formData = new FormData();
    formData.append('question', text);

    this.http
      .post('https://rulebased-chatbot.herokuapp.com', formData)
      .subscribe((response: any) => {
        this.messages.push({
          text: response.answer,
          date: this.getTime(),
          userOwner: false,
        });
        localStorage.setItem('history', JSON.stringify(this.messages));
      });
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
