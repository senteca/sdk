import { WalletTypeDTO } from './WalletTypeDTO';

export interface WalletTypeFilterResultDTO {
  results: WalletTypeDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

