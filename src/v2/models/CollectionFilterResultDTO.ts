import { CollectionDTO } from './CollectionDTO';

export interface CollectionFilterResultDTO {
  results: CollectionDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

