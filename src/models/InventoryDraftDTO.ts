import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface InventoryDraftDTO {
  version?: number;
  key?: string;
  sku: string;
  quantityOnStock: number;
  restockableInDays?: number;
  expectedDelivery?: number;
  acceptsBackorders?: boolean;
  stockLocation: KeyReferenceDTO;
  merchant: KeyReferenceDTO;
  orderTotalReservations?: number;
}

