import { Component } from '@angular/core';
import { Trigger } from 'src/app/components/shared/trigger-list/trigger-item/trigger-item.component';

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutPageComponent {
  public aboutTriggers: Trigger[] = [
    {
      imgUrl: 'assets/bank-svg.png',
      heading: '18 ფილიალი',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/mobile-phone-svg.png',
      heading: 'ისარგებლე ბანკით გზაძი',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/credit-card-svg.png',
      heading: 'თავდაჯერებულად დახარჯე',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    },
    {
      imgUrl: 'assets/atm-svg.png',
      heading: '300+ ATM',
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
