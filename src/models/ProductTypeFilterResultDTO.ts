import { ProductType } from './ProductType';

export interface ProductTypeFilterResultDTO {
  results: ProductType[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

