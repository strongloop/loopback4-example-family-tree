// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property} from '@loopback/repository';

@model()
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  generation?: number;

  @property({
    type: 'number',
  })
  motherId?: number;

  @property({
    type: 'number',
  })
  fatherId?: number;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}
