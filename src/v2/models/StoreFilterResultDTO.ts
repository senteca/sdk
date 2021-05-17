import { StoreDTO } from './StoreDTO';

export interface StoreFilterResultDTO {
  results: StoreDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

