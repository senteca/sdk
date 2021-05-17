import { SearchResultDTO } from './SearchResultDTO';

export interface CatalogFilterResultDTO {
  results: SearchResultDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

