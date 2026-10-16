import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-section04-portfolio',
  templateUrl: './section04-portfolio.component.html',
  styleUrls: ['./section04-portfolio.component.scss'],
})
export class Section04PortfolioComponent {
  lang: string = 'eng';

  constructor(private scroller: ViewportScroller, public gs: GlobalService) {
    this.lang = gs.lang;
  }

  gotoSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }
}
