import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MainRoutingRoutes } from "./main-routing.module";

import { HomeComponent } from "../../home/home.component";
import { CalendarComponent } from "../../calendar/calendar.component";


@NgModule({
  declarations: [
    // HomeComponent,
    // CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutingRoutes),
  ]
})
export class MainModule { }
