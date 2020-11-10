import { InventoryDTONew } from './InventoryDTONew';

export interface InventoryFilterResultDTO {
  results: InventoryDTONew[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

