import { Component } from '@angular/core';

import { Event } from '../../models/event';
import { EventData } from '../mock-event';

@Component ({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html'
})

export class CalendarComponent {
    title = '2017 Календарь соревнований';

    events: Array<Event> = EventData;
}