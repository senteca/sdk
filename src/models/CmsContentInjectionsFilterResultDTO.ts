import { CmsContentInjectionDTO } from './CmsContentInjectionDTO';

export interface CmsContentInjectionsFilterResultDTO {
  results: CmsContentInjectionDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

