// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Person} from '../models';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id
> {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(Person, datasource);
  }
}
