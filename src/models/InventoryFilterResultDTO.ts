import { InventoryDTO } from './InventoryDTO';

export interface InventoryFilterResultDTO {
  results: InventoryDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

