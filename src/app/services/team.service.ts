import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Team } from '../models/team';

@Injectable()
export class TeamService {
         
    constructor(
        private af: AngularFire
    ) { 
        this.af.auth.login();
    }
    
    getTeams(): FirebaseListObservable<Team[]> {
        let teams = this.af.database.list('/teams') as FirebaseListObservable<Team[]>;
        return teams;
    }
}