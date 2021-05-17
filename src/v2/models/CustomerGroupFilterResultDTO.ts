import { CustomerGroupDTO } from './CustomerGroupDTO';

export interface CustomerGroupFilterResultDTO {
  results: CustomerGroupDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

