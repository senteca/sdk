import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface InventoryDraftDTO {
  quantityOnStock: number;
  restockableInDays?: number;
  expectedDelivery?: number;
  acceptsBackorders?: boolean;
  stockLocation: KeyReferenceDTO;
  merchant: KeyReferenceDTO;
  reservations?: number;
}

