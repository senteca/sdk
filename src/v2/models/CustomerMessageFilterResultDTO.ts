import { CustomerMessageDTO } from './CustomerMessageDTO';

export interface CustomerMessageFilterResultDTO {
  results: CustomerMessageDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

