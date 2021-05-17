import { CmsContentDTO } from './CmsContentDTO';

export interface CmsContentFilterResultDTO {
  results: CmsContentDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

