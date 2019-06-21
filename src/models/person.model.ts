import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  generation: string;

  @property({
    type: 'number',
    required: true,
  })
  motherId: number;

  @property({
    type: 'string',
    required: true,
  })
  fatherId: string;


  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
