import { CategoryDTO } from './CategoryDTO';

export interface CategoryFilterResultDTO {
  results: CategoryDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

