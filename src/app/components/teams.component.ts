import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

import { Team } from '../models/team';
import { TeamService } from '../services/team.service';

@Component({
    moduleId: module.id,
    selector: 'teams',
    templateUrl: 'teams.component.html'
})

export class TeamComponent implements OnInit {

    teams: FirebaseListObservable<Team[]>;

    constructor(
        private teamService: TeamService
    ) { }

    ngOnInit(): void {
        this.getTeams();
    }

    getTeams(): void {
        this.teams = this.teamService.getTeams();
    }
}