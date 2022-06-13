import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trigger } from 'src/app/components/shared/trigger-list/trigger-item/trigger-item.component';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactPageComponent {
  public contactTriggers: Trigger[] = [
    {
      imgUrl: 'assets/location-pin.png',
      heading: 'სათაო ოფისი',
      text: '0179, ქ. თბილისი, ი. ჭავჭავაძის გამზ. N1',
    },
    {
      imgUrl: 'assets/clock.png',
      heading: 'სამუშაო საათები',
      text: 'ორშაბათი - პარასკევი, 09:00 - 18:00',
    },
    {
      imgUrl: 'assets/chat.png',
      heading: 'დაგვიკავშირდი',
      text: '(+995 32) 2 25 04 84 | tsu@gmail.com',
    },
  ];

  public onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
