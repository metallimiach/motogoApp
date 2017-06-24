import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Rider } from '../models/rider';

@Injectable()
export class RiderService {
    
    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
        afAuth.auth.signInAnonymously();
    }
    
    getRiders(): FirebaseListObservable<Rider[]> {
        let riders = this.db.list('/riders') as FirebaseListObservable<Rider[]>;
        return riders;
    }
}