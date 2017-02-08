import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event';
import { EventService } from '../services/event.service';

@Component ({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit {
    events: Event[];

    constructor(
        private eventservice: EventService
        ) { }
                
    ngOnInit(): void {
        this.getEvents();
    }

    getEvents(): void {
        this.eventservice.getEvents().then(events => this.events = events);
    }
}