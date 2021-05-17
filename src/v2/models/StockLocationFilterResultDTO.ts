import { StockLocationDTO } from './StockLocationDTO';

export interface StockLocationFilterResultDTO {
  results: StockLocationDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

