import { DiscountTemplateDTO } from './DiscountTemplateDTO';

export interface DiscountTemplateFilterResultDTO {
  results: DiscountTemplateDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

