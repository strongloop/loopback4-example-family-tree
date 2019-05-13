import { Entity } from '@loopback/repository';
export declare class Person extends Entity {
    id?: number;
    name?: string;
    generation?: number;
    motherId?: number;
    fatherId?: number;
    constructor(data?: Partial<Person>);
}
