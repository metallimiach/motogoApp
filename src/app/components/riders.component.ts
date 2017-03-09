import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { Rider } from '../models/rider';
import { RiderService } from '../services/rider.service';

@Component ({
    moduleId: module.id,
    selector: 'riders',
    templateUrl: 'riders.component.html'
})

export class RiderComponent implements OnInit {

    riders: FirebaseListObservable<Rider[]>;
    
    constructor(
        private riderService: RiderService
    ) { }

    ngOnInit(): void {
        this.getRiders();
    }

    getRiders(): void {
        this.riders = this.riderService.getRiders();
    }
}