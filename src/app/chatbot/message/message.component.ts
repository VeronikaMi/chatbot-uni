import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() message: any;
  @Input('date') timestamp: string;

  @Output() selectedOption: EventEmitter<number> = new EventEmitter<number>();

  onSelectOption(id: number) {
    this.selectedOption.emit(id);
  }
}
