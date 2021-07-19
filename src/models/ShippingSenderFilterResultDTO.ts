import { ShippingSenderDTO } from './ShippingSenderDTO';

export interface ShippingSenderFilterResultDTO {
  results: ShippingSenderDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

