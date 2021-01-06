import { KeyReferenceDTO } from './KeyReferenceDTO';
import { InventoryCartReservationDTO } from './InventoryCartReservationDTO';

export interface InventoryDTO {
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
  _id: string;
  createdAt: number;
  updatedAt: number;
  availableQuantity?: number;
  cartReservations?: InventoryCartReservationDTO[];
}

