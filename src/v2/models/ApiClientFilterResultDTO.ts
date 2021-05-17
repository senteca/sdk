import { ApiClientDTO } from './ApiClientDTO';

export interface ApiClientFilterResultDTO {
  results: ApiClientDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

