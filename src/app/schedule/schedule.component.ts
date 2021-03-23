import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

    constructor(private http: HttpClient, private notify: Notifications) { }

    myEvents: MbscCalendarEvent[] = [];

    eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        themeVariant: 'dark',
        clickToCreate: true,
        dragToCreate: true,
        dragToMove: true,
        dragToResize: true,
        view: {
            schedule: { type: 'week' }
        },
        onEventClick: (event) => {
            this.notify.toast({
                message: event.event.title
            });
        }
    };

    ngOnInit(): void {
        this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
            this.myEvents = resp;
            console.log('resp:', resp);
        });
    }

}
