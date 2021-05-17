import { ProductTypeDTO } from './ProductTypeDTO';

export interface ProductTypeFilterResultDTO {
  results: ProductTypeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

