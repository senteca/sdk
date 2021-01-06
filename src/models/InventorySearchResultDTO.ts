import { InventoryDTO } from './InventoryDTO';

export interface InventorySearchResultDTO {
  results: InventoryDTO[];
  offset: number;
  limit: number;
  count: number;
}

