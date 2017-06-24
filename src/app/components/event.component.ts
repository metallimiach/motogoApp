import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { QualificationResult } from '../models/qualificationResult';
import { RaceResult } from '../models/raceResult';

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
    ) { }

    public event: Event;
    public qualificationResults: Array<QualificationResult> = [];
    public raceResults: Array<RaceResult> = [];

    public isActiveTab: boolean = true;
    public showRes: boolean = false;

    ngOnInit(): void {
        this.getEvent();
    }

    getEvent(): void {
        // Get ID from route string
        let id = this.route.snapshot.params['id'];

        // Get particular event by id
        this.eventService.getEvent(id)
            .subscribe(event => {
                this.event = event;
                if (event.results) {
                    this.qualificationResults = event.results.qualification;
                    if (event.results.race) {
                        this.raceResults = event.results.race;
                    }
                }
            });
    }

    goBack(): void {
        this.location.back();
    }

    toggleTab(): void {
        this.isActiveTab = !this.isActiveTab;
    }

    showResults(): void {
        this.showRes = !this.showRes;
    }
}