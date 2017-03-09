import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Rider } from '../models/rider';

@Injectable()
export class RiderService {
    
    constructor(
        private af: AngularFire
    ) { 
        this.af.auth.login();
    }
    
    getRiders(): FirebaseListObservable<Rider[]> {
        let riders = this.af.database.list('/riders') as FirebaseListObservable<Rider[]>;
        return riders;
    }
}