import { Component} from '@angular/core';
import { AppComponent } from '../app.component';
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http'
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-section05-contact',
  templateUrl: './section05-contact.component.html',
  styleUrls: ['./section05-contact.component.scss'],
})
export class Section05ContactComponent {
  mailTest = false;
  privacyOpen = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://yannick-vaterlaus.ch/send_mail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
        this.appComponent.showMessage('mail send');
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      console.log('ohne mail aber abgeschlossen');
    }
  }

  lang: string = 'eng';

  constructor(private scroller: ViewportScroller, private appComponent: AppComponent, private http: HttpClient, public gs: GlobalService) {
    this.lang = gs.lang;
  }


  showprivacy() {
    event?.stopPropagation();
    if (!this.privacyOpen) {
      this.privacyOpen = true;
    }
  }

  closeprivacy() {
    if (this.privacyOpen) {
      this.privacyOpen = false;
    }
  }

  gotoSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }

}
