import { StateDTO } from './StateDTO';

export interface StateFilterResultDTO {
  results: StateDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

