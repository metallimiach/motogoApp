import { Team } from './team';

export class Rider {
    id: number;
    imagePath: string;
    name: string;
    number: number;
    division: string;
    country: string;
    isoCode: string;
    team: Team;
    dateOfBirth ?: Date;
    age ?: number;
    height ?: number;
    weight ?: number;
}