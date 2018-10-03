// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Person } from '../models';
export declare class PersonRepository extends DefaultCrudRepository<Person, typeof Person.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
