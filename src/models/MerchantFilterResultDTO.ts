import { MerchantDTO } from './MerchantDTO';

export interface MerchantFilterResultDTO {
  results: MerchantDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

