import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';

import { EventService } from '../services/event.service';
import { Event } from '../../models/event';

@Component({
    moduleId: module.id,
    selector: 'event-detail',
    templateUrl: 'event.component.html'
})

export class EventComponent implements OnInit {
    
    constructor(
        private eventService: EventService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    public event: Event;

    ngOnInit(): void {
        this.getEvent();
    }

    getEvent(): void {
        // Get ID from route string
        let id = this.route.snapshot.params['id'];

        // Get particular event
        this.eventService.getEvent(id)
        .subscribe(event => {
            this.event = event;
        });
    }

    goBack(): void {
        this.location.back();
    }
}