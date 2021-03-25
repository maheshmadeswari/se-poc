import { Component, OnInit } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications, setOptions, MbscEventcalendarView } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true
});
@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

    constructor(private http: HttpClient) { }

    myEvents: MbscCalendarEvent[] = [];
    view = 'month';
    calView: MbscEventcalendarView = {
        calendar: { labels: true }
    };

    ngOnInit(): void {
        this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
            this.myEvents = resp;
        });
    }

    changeView(): void {
        setTimeout(() => {
            switch (this.view) {
                case 'month':
                    this.calView = {
                        calendar: { labels: true },
                    };
                    break;
                case 'week':
                    this.calView = {
                        schedule: { type: 'week' }
                    };
                    break;
                case 'day':
                    this.calView = {
                        schedule: { type: 'day' }
                    };
                    break;
            }
        });
    }

}
