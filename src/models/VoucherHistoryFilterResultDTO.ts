import { VoucherHistoryDTO } from './VoucherHistoryDTO';

export interface VoucherHistoryFilterResultDTO {
  results: VoucherHistoryDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

