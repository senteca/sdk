import { MediaDTO } from './MediaDTO';

export interface MediaFilterResultDTO {
  results: MediaDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

