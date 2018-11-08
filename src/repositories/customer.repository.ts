import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Customer} from '../models';
import {PostgresdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.code
> {
  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource,
  ) {
    super(Customer, dataSource);
  }
}