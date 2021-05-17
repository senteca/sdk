import { ZoneDTO } from './ZoneDTO';

export interface ZoneFilterResultDTO {
  results: ZoneDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

