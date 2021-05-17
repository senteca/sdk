import { ProductDTO } from './ProductDTO';

export interface ProductSearchResultDTO {
  results: ProductDTO[];
  offset: number;
  limit: number;
  count: number;
}

