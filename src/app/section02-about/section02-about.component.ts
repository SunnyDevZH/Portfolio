import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-section02-about',
  templateUrl: './section02-about.component.html',
  styleUrls: ['./section02-about.component.scss'],
})
export class Section02AboutComponent {
  lang: string = 'eng';

  constructor(public gs: GlobalService) {
    this.lang = gs.lang;
  }
}
