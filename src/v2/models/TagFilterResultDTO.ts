import { TagDTO } from './TagDTO';

export interface TagFilterResultDTO {
  results: TagDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

