import { WalletDTO } from './WalletDTO';

export interface WalletFilterResultDTO {
  results: WalletDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

