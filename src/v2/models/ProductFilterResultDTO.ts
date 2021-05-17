import { ProductDTO } from './ProductDTO';

export interface ProductFilterResultDTO {
  results: ProductDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

