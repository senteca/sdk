import { ViewDTO } from './ViewDTO';

export interface ViewSearchResultDTO {
  results: ViewDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

