import { Component, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pushRightClass: string;
  @Output() public isLoggedin =  new EventEmitter();

  constructor(public router: Router) {

      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });
  }

  ngOnInit() {
      this.pushRightClass = 'push-right';
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
      this.isLoggedin.emit('false');
      this.router.navigate(['/login']);
  }

}
