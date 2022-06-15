import { Component } from '@angular/core';
import { Trigger } from 'src/app/components/shared/trigger-list/trigger-item/trigger-item.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent {
  public homeTriggers: Trigger[] = [
    {
      imgUrl: 'assets/home.png',
      heading: 'Home Loans',
      text: 'ბიზნესზე მორგებული მომსახურება,მეტი ურთიერთობა მომხმარებელთან',
    },
    {
      imgUrl: 'assets/online.png',
      heading: 'Online Banking',
      text: 'ბიზნესზე მორგებული მომსახურება,მეტი ურთიერთობა მომხმარებელთან',
    },
    {
      imgUrl: 'assets/credit.png',
      heading: 'Credit Cards',
      text: 'ბიზნესზე მორგებული მომსახურება,მეტი ურთიერთობა მომხმარებელთან',
    },
    {
      imgUrl: 'assets/business.png',
      heading: 'Business Banking',
      text: 'ბიზნესზე მორგებული მომსახურება,მეტი ურთიერთობა მომხმარებელთან',
    },
    {
      imgUrl: 'assets/travel.png',
      heading: 'Travel',
      text: 'ბიზნესზე მორგებული მომსახურება,მეტი ურთიერთობა მომხმარებელთან',
    },
    {
      imgUrl: 'assets/money.png',
      heading: 'Money Management',
      text: 'ბიზნესზე მორგებული მომსახურება,მეტი ურთიერთობა მომხმარებელთან',
    },
  ];

  public reviews: Trigger[] = [
    {
      imgUrl: 'assets/review1.png',
      heading: 'ეკა გაბელაია',
      text: 'უკვე რამდენიმე წელია რაც ვსარგებლობ ამ ბანკის მომსახურებით და ძალიან კმაყოფილი ვარ. სერვისი ძალიან სწრაფია, რაშიც ეხმარებათ თავისი ჩათბოთი, ყოველთვის მპასუხობს ამომწურავად და გასაგებად',
    },
    {
      imgUrl: 'assets/review3.png',
      heading: 'ლიკა მელია',
      text: 'ძალიან კმაყოფილი ვარ. სერვისი ძალიან სწრაფია, რაშიც ეხმარებათ თავისი ჩათბოთი, ყოველთვის მპასუხობს ამომწურავად და გასაგებად',
    },
    {
      imgUrl: 'assets/review4.png',
      heading: 'ნიკა კოსტავა',
      text: 'უკვე რამდენიმე წელია რაც ვსარგებლობ ამ ბანკის მომსახურებით და ძალიან კმაყოფილი ვარ. სერვისი ძალიან სწრაფია, რაშიც ეხმარებათ თავისი ჩათბოთი, ყოველთვის მპასუხობს ამომწურავად და გასაგებად',
    },
  ];
}
