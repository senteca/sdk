import { CustomerDTO } from './CustomerDTO';

export interface CustomerFilterResultDTO {
  results: CustomerDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

