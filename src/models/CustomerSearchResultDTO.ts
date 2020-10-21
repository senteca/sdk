import { CustomerDTO } from './CustomerDTO';

export interface CustomerSearchResultDTO {
  results: CustomerDTO[];
  offset: number;
  limit: number;
  count: number;
}

