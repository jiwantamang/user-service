import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Customer} from '../models';
import {CustomerRepository} from '../repositories';
import {FilterConverter} from "../util/filter.converter";

export class CustomerController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository : CustomerRepository,
  ) {}

  @post('/customers', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {'x-ts-type': Customer}},
      },
    },
  })
  async create(@requestBody() customer: Customer): Promise<Customer> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers/count', {
    responses: {
      '200': {
        description: 'Customer model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers', {
    responses: {
      '200': {
        description: 'Array of Customer model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Customer}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer)) filter?: Filter,
  ): Promise<Customer[]> {
    return await this.customerRepository.find(FilterConverter.convert(filter));
  }

  @patch('/customers', {
    responses: {
      '200': {
        description: 'Customer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() customer: Customer,
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers/{code}', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: {'application/json': {'x-ts-type': Customer}},
      },
    },
  })
  async findById(@param.path.number('code') code: string): Promise<Customer> {
    return await this.customerRepository.findById(code);
  }

  @patch('/customers/{code}', {
    responses: {
      '204': {
        description: 'Customer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('code') code: string,
    @requestBody() customer: Customer,
  ): Promise<void> {
    await this.customerRepository.updateById(code, customer);
  }

  @del('/customers/{code}', {
    responses: {
      '204': {
        description: 'Customer DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('code') code: string): Promise<void> {
    await this.customerRepository.deleteById(code);
  }
}
