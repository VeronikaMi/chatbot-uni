import { Component, Input } from '@angular/core';
import { Trigger } from './trigger-item/trigger-item.component';

@Component({
  selector: 'trigger-list',
  templateUrl: './trigger-list.component.html',
  styleUrls: ['./trigger-list.component.scss'],
})
export class TriggerListComponent {
  @Input() isVertical: boolean;
  @Input() isReview: boolean;
  @Input() triggers: Trigger[];

  constructor() {
    console.log(this.isVertical);
  }
}
