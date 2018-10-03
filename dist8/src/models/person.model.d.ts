// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { Entity } from '@loopback/repository';
export declare class Person extends Entity {
    id?: number;
    name?: string;
    generation?: number;
    motherId?: number;
    fatherId?: number;
    constructor(data?: Partial<Person>);
}
