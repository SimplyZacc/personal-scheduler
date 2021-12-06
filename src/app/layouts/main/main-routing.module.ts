import { Routes } from '@angular/router';

import { HomeComponent } from "../../home/home.component";
import { CalendarComponent } from "../../calendar/calendar.component";

export const MainRoutingRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calendar', component: CalendarComponent},
]
