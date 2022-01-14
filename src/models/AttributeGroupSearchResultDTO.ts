import { AttributeGroupDTO } from './AttributeGroupDTO';

export interface AttributeGroupSearchResultDTO {
  results: AttributeGroupDTO[];
  offset: number;
  limit: number;
  count: number;
}

