import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  lang: string = 'eng';

  constructor(private scroller: ViewportScroller, public gs: GlobalService) {
    this.lang = gs.lang;
  }

  showMenu() {
    let mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu != null) {
      mobileMenu.style.display = 'flex';
    }
  }
  closeMenu() {
    let mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu != null) {
      mobileMenu.style.display = 'none';
    }
  }
  gotoSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }

  changeLang(newLang: string) {
    this.gs.lang = newLang;
  }

   togglePasswordInput(): void {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;

    passwordInput.classList.toggle('visible');

    if (passwordInput.classList.contains('visible')) {
        passwordInput.style.opacity = '1';
    } else {
        passwordInput.style.opacity = '0';
    }

    
  }

password: string = '';
correctPassword: string = 'job'; // Setze hier dein korrektes Passwort

checkPassword(): void {
  if (this.password === this.correctPassword) {
    window.open('./../../assets/CV.pdf');
    this.password = '';
    this.togglePasswordInput();
  }
}


 
}
