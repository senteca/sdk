import { ValueTypeDTO } from './ValueTypeDTO';

export interface ValueTypeFilterResultDTO {
  results: ValueTypeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

