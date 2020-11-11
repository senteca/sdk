import { CategoryDTO } from './CategoryDTO';

export interface CategorySearchResultDTO {
  results: CategoryDTO[];
  offset: number;
  limit: number;
  count: number;
}

