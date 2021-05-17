import { KeyReferenceDTO } from './KeyReferenceDTO';
import { InventoryCartReservationDTO } from './InventoryCartReservationDTO';

export interface InventoryDTO {
  quantityOnStock: number;
  restockableInDays?: number;
  expectedDelivery?: number;
  acceptsBackorders?: boolean;
  stockLocation: KeyReferenceDTO;
  merchant: KeyReferenceDTO;
  reservations?: number;
  orderTotalReservations?: number;
  availableQuantity?: number;
  cartReservations?: InventoryCartReservationDTO[];
}

