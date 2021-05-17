import { PageDTO } from './PageDTO';

export interface PageFilterResultDTO {
  results: PageDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

