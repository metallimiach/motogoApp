import { Injectable } from '@angular/core';

import { Rider } from '../../models/rider';
import { RidersData } from '../mock-data/mock-riders';

@Injectable()
export class RiderService {
    
    getRiders(): Promise<Rider[]> {
        return Promise.resolve(RidersData);
    }
}