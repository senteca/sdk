import { CollectionDTO } from './CollectionDTO';

export interface CollectionSearchResultDTO {
  results: CollectionDTO[];
  offset: number;
  limit: number;
  count: number;
}

