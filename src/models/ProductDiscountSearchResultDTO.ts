import { ProductDiscountDTO } from './ProductDiscountDTO';

export interface ProductDiscountSearchResultDTO {
  results: ProductDiscountDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

