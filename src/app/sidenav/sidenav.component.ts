import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navOpen: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleNav = () => {
    this.navOpen = !this.navOpen;
    this.navOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'visible');
  };
}
