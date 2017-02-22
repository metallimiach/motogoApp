import { Component, OnInit } from '@angular/core';

import { Team } from '../../models/team';
import { TeamService } from '../services/team.service';

@Component({
    moduleId: module.id,
    selector: 'teams',
    templateUrl: 'teams.component.html'
})

export class TeamComponent implements OnInit {
    teams: Team[];

    constructor(
        private teamService: TeamService
    ) { }

    ngOnInit(): void {
        this.getTeams();
    }

    getTeams(): void {
        this.teamService.getTeams().then(teams => this.teams = teams);
    }
}