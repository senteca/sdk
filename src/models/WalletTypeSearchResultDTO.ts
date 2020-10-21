import { WalletTypeDTO } from './WalletTypeDTO';

export interface WalletTypeSearchResultDTO {
  results: WalletTypeDTO[];
  offset: number;
  limit: number;
  count: number;
}

