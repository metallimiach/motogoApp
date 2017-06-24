import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Team } from '../models/team';

@Injectable()
export class TeamService {
         
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
        afAuth.auth.signInAnonymously();
    }
    
    getTeams(): FirebaseListObservable<Team[]> {
        let teams = this.db.list('/teams') as FirebaseListObservable<Team[]>;
        return teams;
    }
}