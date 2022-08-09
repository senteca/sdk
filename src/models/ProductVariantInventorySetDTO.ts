import { InventoryDraftDTO } from './InventoryDraftDTO';

export interface ProductVariantInventorySetDTO {
  sku: string;
  inventory: InventoryDraftDTO;
}

