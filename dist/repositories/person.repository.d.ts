import { DefaultCrudRepository } from '@loopback/repository';
import { Person, PersonRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class PersonRepository extends DefaultCrudRepository<Person, typeof Person.prototype.id, PersonRelations> {
    constructor(dataSource: DbDataSource);
}
