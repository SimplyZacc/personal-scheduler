import { Component, OnInit } from '@angular/core';
import { NavbarService } from "../components/navbar/navbar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.setTitle("Home");
  }

}
