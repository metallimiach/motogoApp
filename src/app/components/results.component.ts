import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { ResultService } from '../services/result.service';

@Component({
    moduleId: module.id,
    selector: 'results',
    templateUrl: 'results.component.html'
})

export class ResultsComponent implements OnInit {
    
    public isActiveTab: boolean = true;

    public riderResults: Array<any> = [];
    public teamResults: Array<any> = [];

    constructor(
        private resultService: ResultService
    ) { }

    ngOnInit(): void {
        this.getResults();
    }

    getResults(): void {
        // Get rider results list and sort it by position
        this.resultService.getRiderResults()
            .subscribe(result => {
                this.riderResults = result.sort(function (a, b) {
                    return a.position - b.position
                });
            });

        // Get team results list and sort it by position
        this.resultService.getTeamResults()
            .subscribe(result => {
                this.teamResults = result.sort(function (a, b) {
                    return a.position - b.position
                });
            });
    }

    toggleTab(): void {
        this.isActiveTab = !this.isActiveTab;
    }
}