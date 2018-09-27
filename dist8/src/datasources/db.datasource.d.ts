import { juggler, AnyObject } from '@loopback/repository';
export declare class DbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: AnyObject);
}
