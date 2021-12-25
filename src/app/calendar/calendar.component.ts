import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { HomeService } from "../core/services/home.service";
import { map } from 'rxjs/operators';
import { User } from '../core/Models/User';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    height: 600,
    selectable: true,
    unselectAuto: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', color: 'red', backgroundColor: 'blue', start: '2021-12-01T14:30:00', end: '2021-12-01T16:30:00', allDay: false },
      { title: 'event 2', date: '2021-12-10' },
      { title: 'event 3', date: '2021-12-10' },
      { title: 'event 4', date: '2021-12-10' },
      { title: 'event 5', date: '2021-12-10' },
    ],
  }

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  handleDateClick(arg: any) {
  }

}
