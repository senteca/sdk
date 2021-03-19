import { CustomSortDTO } from './CustomSortDTO';

export interface CustomSortFilterResultDTO {
  results: CustomSortDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

