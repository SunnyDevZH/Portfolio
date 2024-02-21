import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio_v1';
  myMessage = 'hello stranger';
  messageDelay: number | undefined;
  displayMessage = false;

  showMessage(message: string, delay: number = 2, bgColor = '#2a3647') {
    this.myMessage = message;
    this.messageDelay = delay * 1000;

    this.displayMessage = true;

    setTimeout(() => {
      this.displayMessage = false;
    }, this.messageDelay);
  }
}
