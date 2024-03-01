import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-section03-skills',
  templateUrl: './section03-skills.component.html',
  styleUrls: ['./section03-skills.component.scss'],
})
export class Section03SkillsComponent {
  lang: string = 'eng';

  constructor(private scroller: ViewportScroller, public gs: GlobalService) {
    this.lang = gs.lang;
  }

  gotoSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }
}
