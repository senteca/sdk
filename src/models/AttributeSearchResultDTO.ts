import { AttributeDTO } from './AttributeDTO';

export interface AttributeSearchResultDTO {
  results: AttributeDTO[];
  offset: number;
  limit: number;
  count: number;
}

