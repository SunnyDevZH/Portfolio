import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-section03-skills',
  templateUrl: './section03-skills.component.html',
  styleUrls: ['./section03-skills.component.scss'],
})
export class Section03SkillsComponent {
  lang: string = 'eng';

  constructor(public gs: GlobalService) {
    this.lang = gs.lang;
  }
}
