import { CustomFieldDTO } from './CustomFieldDTO';

export interface CustomFieldFilterResultDTO {
  results: CustomFieldDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

