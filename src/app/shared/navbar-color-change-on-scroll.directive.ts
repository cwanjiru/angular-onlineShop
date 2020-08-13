import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[otsNavbarColorChangeOnScroll]'
})
export class NavbarColorChangeOnScrollDirective {
 private whiteNavbar: boolean;
  constructor() { }

  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 500) {
      this.whiteNavbar = true;
    }
    else {
      this.whiteNavbar = false;
    }
  }

  @HostBinding('class') get classes() {
    if (this.whiteNavbar){
      return `navbar d-block navbar-floating navbar-sticky navbar-expand-lg navbar-light navbar-stuck`;
    }
    else {
      return `navbar d-block navbar-floating navbar-sticky navbar-expand-lg navbar-dark`;
    }
  }

}
