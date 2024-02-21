import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ViewportScroller } from '@angular/common';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-section01-hero',
  templateUrl: './section01-hero.component.html',
  styleUrls: ['./section01-hero.component.scss'],
})
export class Section01HeroComponent {
  lang: string = 'eng';

  constructor(private scroller: ViewportScroller, public gs: GlobalService) {
    this.lang = gs.lang;
  }

  gotoSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }
}
