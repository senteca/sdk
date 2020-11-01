import { WalletDTO } from './WalletDTO';

export interface WalletSearchResultDTO {
  results: WalletDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

