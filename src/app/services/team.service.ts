import { Injectable } from '@angular/core';

import { Team } from '../../models/team';
import { TeamsData } from '../mock-data/mock-teams';

@Injectable()
export class TeamService {
    
    getTeams(): Promise<Team[]> {
        return Promise.resolve(TeamsData);
    }

    getTeam(id: number): Promise<Team> {
        return this.getTeams()
        .then(teams => teams.find(team => team.id === id));
    }
}