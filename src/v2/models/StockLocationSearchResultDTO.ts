import { StockLocationDTO } from './StockLocationDTO';

export interface StockLocationSearchResultDTO {
  results: StockLocationDTO[];
  offset: number;
  limit: number;
  count: number;
}

