import { SynonymDTO } from './SynonymDTO';

export interface SynonymFilterResultDTO {
  results: SynonymDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

