import { CartDiscountDTO } from './CartDiscountDTO';

export interface CartDiscountFilterResultDTO {
  results: CartDiscountDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

