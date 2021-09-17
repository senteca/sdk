import { RegexRedirectDTO } from './RegexRedirectDTO';

export interface RegexRedirectFilterResultDTO {
  results: RegexRedirectDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

