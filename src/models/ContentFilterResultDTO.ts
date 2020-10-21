import { ContentDTO } from './ContentDTO';

export interface ContentFilterResultDTO {
  results: ContentDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

