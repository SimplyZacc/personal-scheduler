import { Component, OnInit } from '@angular/core';

import { NavbarService } from "./navbar.service";

import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  pageTitle: String = "";

  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;

  constructor(private navBarService: NavbarService,) {
  }

  ngOnInit(): void {
    var a = this.navBarService.getTitle().pipe(map(data => data));

    a.subscribe(data => {
      this.pageTitle = data;
    });
  }

  changeTitle(title: String) {
    this.navBarService.setTitle(title);
    this.pageTitle = title;
  }

}
