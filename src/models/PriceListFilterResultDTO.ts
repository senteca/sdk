import { PriceListDTO } from './PriceListDTO';

export interface PriceListFilterResultDTO {
  results: PriceListDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

