import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import { map } from 'rxjs/operators';
import { ApiService } from "../core/services/api.service";
import { NavbarService } from "../components/navbar/navbar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  @ViewChild('calendar') calendarVar: FullCalendarComponent | undefined;

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
    eventClick: this.handleEventClick.bind(this),
    events: [],
  }

  constructor(private apiService: ApiService, private nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.setTitle("Calendar");
  }

  ngAfterViewInit(): void {
    this.addEvents();
  }

  handleDateClick(arg: any) {
    let calendarApi = this.calendarVar?.getApi();
    if (calendarApi?.view.type == "dayGridMonth") {
      calendarApi.changeView("timeGridDay", arg.date)
    }
  }

  handleEventClick(arg: any) {
    console.log(arg.event);
  }

  addEvents() {
    let calendarApi = this.calendarVar?.getApi();


    var a = this.apiService.get('event').pipe(map(data => data));

    a.subscribe(data => {
      if (data.status) {
        data.data.forEach((item: { title: string; start: Date; end: Date; allDay: boolean; backgroundColor: string; color: string; }) => {
          console.log(item);
          calendarApi?.addEvent({
            title: item.title,
            start: item.start,
            end: item.end,
            allDay: item.allDay,
            backgroundColor: item.backgroundColor,
            textColor: item.color,
          });
        });
      } else {
        alert("call failed");
      }


    });
  }

}
