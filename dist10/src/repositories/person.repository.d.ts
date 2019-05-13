import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Person } from '../models';
export declare class PersonRepository extends DefaultCrudRepository<Person, typeof Person.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
