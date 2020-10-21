import { ThemeDTO } from './ThemeDTO';

export interface ThemeFilterResultDTO {
  results: ThemeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

