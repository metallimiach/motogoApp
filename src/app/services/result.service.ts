import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ResultService {
         
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
        afAuth.auth.signInAnonymously();
    }
    
    getRiderResults(): FirebaseListObservable<any[]> {
        let riderResults = this.db.list('/results/riders') as FirebaseListObservable<any[]>;
        return riderResults;
    }

    getTeamResults(): FirebaseListObservable<any[]> {
        let riderResults = this.db.list('/results/teams') as FirebaseListObservable<any[]>;
        return riderResults;
    }
}