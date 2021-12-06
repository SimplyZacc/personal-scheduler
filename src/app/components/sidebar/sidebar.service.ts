import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  sideNavToggle: boolean;

  constructor() {
    this.sideNavToggle = true;
  }

  toggleSideBar() {
    this.sideNavToggle = !this.sideNavToggle;
  }
}
