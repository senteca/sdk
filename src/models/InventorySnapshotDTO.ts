import { InventoryAvailability } from './InventoryAvailability';

export interface InventorySnapshotDTO {
  availabilities?: InventoryAvailability[];
  canOrder?: boolean;
  availableQuantity?: number;
}

