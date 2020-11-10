import { KeyReferenceDTO } from './KeyReferenceDTO';

export interface InventoryDTONew {
  _id: string;
  availableQuantity: number;
  createdAt: number;
  updatedAt: number;
  version?: number;
  sku: string;
  quantityOnStock: number;
  restockableInDays?: number;
  expectedDelivery?: number;
  acceptsBackorders?: boolean;
  stockLocationKey: KeyReferenceDTO;
  merchantKey: KeyReferenceDTO;
}

