import { Component, OnInit } from '@angular/core';

import { SidebarService } from "./sidebar.service";

import { faBars, faCalendar, faChartBar, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  faBars = faBars;
  faCalendar = faCalendar;
  faChartBar = faChartBar;
  faHome = faHome;
  faUser = faUser;

  constructor(private sideBarService: SidebarService) {
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.sideBarService.toggleSideBar();
  }

  sideBarToggled(): boolean {
    return this.sideBarService.sideNavToggle;
  }

}
