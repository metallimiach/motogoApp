import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { Event } from '../models/event';
import { EventService } from '../services/event.service';

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit {
    
    public events: FirebaseListObservable<Event[]>;

    constructor(        
        private eventService: EventService
    ) { }

    ngOnInit(): void {
        this.getEvents();
    }

    getEvents(): void {
        this.events = this.eventService.getEvents();
    }
}