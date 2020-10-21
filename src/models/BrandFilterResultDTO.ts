import { BrandDTO } from './BrandDTO';

export interface BrandFilterResultDTO {
  results: BrandDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

