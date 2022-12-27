import type { Game } from "./game";

export class Event {
    eventId?: number;
    name?: string;
    description?: string;
    date?: string;
    attendees?: Array<string>;
    organizer?: string;
    game?: Game;
}