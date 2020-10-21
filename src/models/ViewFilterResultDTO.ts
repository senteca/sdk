import { ViewDTO } from './ViewDTO';

export interface ViewFilterResultDTO {
  results: ViewDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

