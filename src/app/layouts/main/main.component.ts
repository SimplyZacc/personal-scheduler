import { Component, OnInit } from '@angular/core';

import { SidebarService } from "../../components/sidebar/sidebar.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private sideBarService: SidebarService) { }

  ngOnInit(): void {
  }

  sideBarToggled() : boolean {
    return this.sideBarService.sideNavToggle;
  }

}
