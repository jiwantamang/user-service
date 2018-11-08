import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './postgresdb.datasource.json';

export class PostgresdbDataSource extends juggler.DataSource {
  static dataSourceName = 'postgresdb';

  constructor(
    @inject('datasources.config.postgresdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
