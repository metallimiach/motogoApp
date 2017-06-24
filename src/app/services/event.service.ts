import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Event } from '../models/event';

@Injectable()
export class EventService {

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
        afAuth.auth.signInAnonymously();
    }

    getEvents(): FirebaseListObservable<Event[]> {
         let events = this.db.list('/events') as FirebaseListObservable<Event[]>;
         return events;
    }

    getEvent(id: number): FirebaseObjectObservable<Event> {
        let event = this.db.object('/events/' + id) as FirebaseObjectObservable<Event>;
        return event;
    }
}