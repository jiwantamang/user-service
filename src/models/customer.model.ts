import {Entity, model, property} from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'number'
  })
  id: number;

  @property({
      type: 'string',
      id: true
  })
  code: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
  })
  dob?: string;

  @property({
    type: 'string',
    required: true,
  })
  email_id: string;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'date',
  })
  updated_at?: string;

  @property({
    type: 'date',
  })
  deleted_at?: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
