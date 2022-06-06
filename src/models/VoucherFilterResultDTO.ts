import { VoucherDTO } from './VoucherDTO';

export interface VoucherFilterResultDTO {
  results: VoucherDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

