import { Component, Input } from '@angular/core';

@Component({
  selector: 'trigger',
  templateUrl: './trigger-item.component.html',
  styleUrls: ['trigger-item.component.scss'],
})
export class TriggerItemComponent {
  @Input() isVertical: boolean;
  @Input() trigger: Trigger;
  @Input() isReview: boolean;
}

export class Trigger {
  imgUrl: string;
  heading: string;
  text: string;
}
