import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ResultService {
         
    constructor(
        private af: AngularFire
    ) { 
        this.af.auth.login();
    }
    
    getRiderResults(): FirebaseListObservable<any[]> {
        let riderResults = this.af.database.list('/results/riders') as FirebaseListObservable<any[]>;
        return riderResults;
    }

    getTeamResults(): FirebaseListObservable<any[]> {
        let riderResults = this.af.database.list('/results/teams') as FirebaseListObservable<any[]>;
        return riderResults;
    }
}