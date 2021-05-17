import { CmsRedirectDTO } from './CmsRedirectDTO';

export interface CmsRedirectFilterResultDTO {
  results: CmsRedirectDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

