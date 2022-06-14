import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public darkBackground: Subject<boolean> = new Subject<boolean>();
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.render.listen('window', 'scroll', () => {
      const rect = this.el.nativeElement.getBoundingClientRect().bottom;
      if (document.documentElement.clientHeight + 300 > rect) {
        this.darkBackground.next(true);
      } else {
        this.darkBackground.next(false);
      }
    });
  }
}
