import { Entity } from '@loopback/repository';
export declare class Person extends Entity {
    id: number;
    name: string;
    generation: string;
    motherId: number;
    fatherId: string;
    constructor(data?: Partial<Person>);
}
export interface PersonRelations {
}
export declare type PersonWithRelations = Person & PersonRelations;
