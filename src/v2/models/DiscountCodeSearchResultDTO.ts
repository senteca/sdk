import { DiscountCodeDTO } from './DiscountCodeDTO';

export interface DiscountCodeSearchResultDTO {
  results: DiscountCodeDTO[];
  offset: number;
  limit: number;
  count: number;
}

