import { TaxCategoryDTO } from './TaxCategoryDTO';

export interface TaxCategoryFilterResultDTO {
  results: TaxCategoryDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

