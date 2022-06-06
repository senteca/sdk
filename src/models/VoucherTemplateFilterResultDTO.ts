import { VoucherTemplateDTO } from './VoucherTemplateDTO';

export interface VoucherTemplateFilterResultDTO {
  results: VoucherTemplateDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

