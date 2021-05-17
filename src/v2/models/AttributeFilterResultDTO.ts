import { AttributeDTO } from './AttributeDTO';

export interface AttributeFilterResultDTO {
  results: AttributeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

