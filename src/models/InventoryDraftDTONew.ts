import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface InventoryDraftDTONew {
  version?: number;
  sku: string;
  quantityOnStock: number;
  restockableInDays?: number;
  expectedDelivery?: number;
  acceptsBackorders?: boolean;
  stockLocation: KeyReferenceDTO;
  merchant: KeyReferenceDTO;
}

