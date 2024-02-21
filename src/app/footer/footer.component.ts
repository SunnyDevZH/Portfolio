import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  thisYear: number = new Date().getFullYear();
  lang: string = 'eng';
  imprintOpen = false;

  constructor(public gs: GlobalService) {
    this.lang = gs.lang;
  }

  showImprint() {
    event?.stopPropagation();
    if (!this.imprintOpen) {
      this.imprintOpen = true;
    }
  }

  closeImprint() {
    if (this.imprintOpen) {
      this.imprintOpen = false;
    }
  }
}
