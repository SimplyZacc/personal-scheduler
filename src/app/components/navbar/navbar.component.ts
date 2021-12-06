import { Component, OnInit } from '@angular/core';

import { NavbarService } from "./navbar.service";

import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  pageTitle: String;

  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;

  constructor(private navBarService: NavbarService) {

    this.pageTitle = this.navBarService.title;
  }

  ngOnInit(): void {
  }

}
