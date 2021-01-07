import { InventoryReservationDTO } from './InventoryReservationDTO';

export interface SkuReservationDTO {
  sku: string;
  availableQuantity?: number;
  inventoryReservations?: InventoryReservationDTO[];
  status: SkuReservationDTOStatusEnum;
  reservedUntil?: number;
}

export enum SkuReservationDTOStatusEnum {
    Available = 'available',  
    Unavailable = 'unavailable',  
}
