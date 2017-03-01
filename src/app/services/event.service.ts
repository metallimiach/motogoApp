import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Event } from '../../models/event';

@Injectable()
export class EventService {

    constructor(
        private af: AngularFire
    ) { 
        this.af.auth.login();
    }

    getEvents(): FirebaseListObservable<Event[]> {
         let events = this.af.database.list('/events') as FirebaseListObservable<Event[]>;
         return events;
    }

    getEvent(id: number): FirebaseObjectObservable<Event> {
        let event = this.af.database.object('/events/' + id) as FirebaseObjectObservable<Event>;
        return event;
    }
}