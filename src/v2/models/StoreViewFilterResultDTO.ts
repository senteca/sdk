import { StoreViewDTO } from './StoreViewDTO';

export interface StoreViewFilterResultDTO {
  results: StoreViewDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

