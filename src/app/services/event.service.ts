import { Injectable } from '@angular/core';

import { Event } from '../../models/event';
import { EventData } from '../mock-events';

@Injectable()
export class EventService {
    
    getEvents(): Promise<Event[]> {
        return Promise.resolve(EventData);
    }

    getEvent(id: number): Promise<Event> {
        return this.getEvents()
        .then(events => events.find(event => event.id === id));
    }
}