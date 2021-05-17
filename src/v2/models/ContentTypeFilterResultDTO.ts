import { ContentTypeDTO } from './ContentTypeDTO';

export interface ContentTypeFilterResultDTO {
  results: ContentTypeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

