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
      text: 'ჩვენი ფილიალები განლაგებულია ადვილად მისახვედრ ადგილებზე, სადაც გელოდება საუკეთესო სერვისი',
    },
    {
      imgUrl: 'assets/mobile-phone-svg.png',
      heading: 'ისარგებლე ბანკით გზაძი',
      text: 'მეტი შესაძლებლობისთვის, მეტი კომფორტისთვის და სწრაფი სერვისისთვის',
    },
    {
      imgUrl: 'assets/credit-card-svg.png',
      heading: 'თავდაჯერებულად დახარჯე',
      text: 'ჩვენ ვზრუნავთ თქვენ უსაფრთხოებაზე და დაცვაზე, რომ უფრო თავისუფლად შეიძინო ის რაც გინდა',
    },
    {
      imgUrl: 'assets/atm-svg.png',
      heading: '300+ ATM',
      text: 'ჩვენი ავტომატები მზად არიან დაგეხმაროს ნებისმიერ დროს და კომფორტულ ადგილას',
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
