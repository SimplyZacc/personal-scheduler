import { Component, OnInit } from '@angular/core';

import { SidebarService } from "./sidebar.service";

import { faBars, faCalendar, faChartBar, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Route } from '@angular/router';

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

  menuItems: any = {};

  constructor(private sideBarService: SidebarService) {
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  toggleSideBar() {
    this.sideBarService.toggleSideBar();
  }

  sideBarToggled(): boolean {
    return this.sideBarService.sideNavToggle;
  }

}
