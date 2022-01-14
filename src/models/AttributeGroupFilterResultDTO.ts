import { AttributeGroupDTO } from './AttributeGroupDTO';

export interface AttributeGroupFilterResultDTO {
  results: AttributeGroupDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

