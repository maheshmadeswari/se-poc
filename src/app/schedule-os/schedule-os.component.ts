import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MbscCalendarEvent, MbscEventcalendarOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-schedule-os',
  templateUrl: './schedule-os.component.html',
  styleUrls: ['./schedule-os.component.scss'],
})
export class ScheduleOsComponent implements OnInit{

  constructor(private http: HttpClient) {}

    myEvents: MbscCalendarEvent[] = [];

    eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        themeVariant: 'light',
        clickToCreate: true,
        dragToCreate: true,
        dragToMove: true,
        dragToResize: true,
        responsive: {
            xsmall: {
                view: {
                    schedule: {
                        type: 'day'
                    }
                }
            },
            custom: { // Custom breakpoint
                breakpoint: 600,
                view: {
                    schedule: {
                        type: 'week'
                    }
                }
            }
        }
    };

    ngOnInit(): void {
        this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
            this.myEvents = resp;
        });
    }
}
