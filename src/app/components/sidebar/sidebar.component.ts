import { Component, OnInit } from '@angular/core';

import { SidebarService } from "./sidebar.service";
import { JwtService } from "../../core/services/jwt.service";
import { UserService } from "../../core/services/user.service";

import { faBars, faCalendar, faChartBar, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: any;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: 'home', title: 'Home', icon: faHome, class: ''},
  {path: 'calendar', title: 'Calendar', icon: faCalendar, class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  faBars = faBars;
  faUser = faUser;
  Username: String = "Username";

  menuItems: any = {};

  constructor(private sideBarService: SidebarService, private jwt: JwtService, private router: Router, private user: UserService,) {
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.Username = this.user.getName();
  }

  toggleSideBar() {
    this.sideBarService.toggleSideBar();
  }

  sideBarToggled(): boolean {
    return this.sideBarService.sideNavToggle;
  }

  signOut() {
    this.jwt.destroyToken();
    this.router.navigateByUrl('');
  }

}
