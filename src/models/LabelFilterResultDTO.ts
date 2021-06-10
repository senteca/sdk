import { LabelDTO } from './LabelDTO';

export interface LabelFilterResultDTO {
  results: LabelDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

