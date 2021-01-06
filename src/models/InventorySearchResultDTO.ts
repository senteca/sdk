import { InventoryDTONew } from './InventoryDTONew';

export interface InventorySearchResultDTO {
  results: InventoryDTONew[];
  offset: number;
  limit: number;
  count: number;
}

