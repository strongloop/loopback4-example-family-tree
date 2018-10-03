// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: family-tree
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { juggler, AnyObject } from '@loopback/repository';
export declare class DbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
