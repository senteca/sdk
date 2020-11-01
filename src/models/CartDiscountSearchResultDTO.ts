import { CartDiscountDTO } from './CartDiscountDTO';

export interface CartDiscountSearchResultDTO {
  results: CartDiscountDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

