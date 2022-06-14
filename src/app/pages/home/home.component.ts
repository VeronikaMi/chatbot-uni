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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/online.png',
      heading: 'Online Banking',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/credit.png',
      heading: 'Credit Cards',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/business.png',
      heading: 'Business Banking',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/travel.png',
      heading: 'Travel',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/money.png',
      heading: 'Money Management',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
  ];

  public reviews: Trigger[] = [
    {
      imgUrl: 'assets/review1.png',
      heading: 'Name Surname',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/review3.png',
      heading: 'Name Surname',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/review4.png',
      heading: 'Name Surname',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
  ];
}
