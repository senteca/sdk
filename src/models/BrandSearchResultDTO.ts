import { BrandDTO } from './BrandDTO';

export interface BrandSearchResultDTO {
  results: BrandDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

