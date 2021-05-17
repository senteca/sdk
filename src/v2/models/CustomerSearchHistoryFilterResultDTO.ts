import { CustomerSearchHistoryDTO } from './CustomerSearchHistoryDTO';

export interface CustomerSearchHistoryFilterResultDTO {
  results: CustomerSearchHistoryDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

