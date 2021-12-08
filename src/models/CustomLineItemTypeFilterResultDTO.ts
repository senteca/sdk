import { CustomLineItemTypeDTO } from './CustomLineItemTypeDTO';

export interface CustomLineItemTypeFilterResultDTO {
  results: CustomLineItemTypeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

