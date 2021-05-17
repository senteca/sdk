import { ProductDiscountDTO } from './ProductDiscountDTO';

export interface ProductDiscountFilterResultDTO {
  results: ProductDiscountDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

