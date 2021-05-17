import { DiscountCodeDTO } from './DiscountCodeDTO';

export interface DiscountCodeFilterResultDTO {
  results: DiscountCodeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

