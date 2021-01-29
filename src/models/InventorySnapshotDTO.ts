import { InventoryAvailability } from './InventoryAvailability';

export interface InventorySnapshotDTO {
  updatedAt: number;
  availabilities: InventoryAvailability[];
  matchingAvailabilities?: InventoryAvailability[];
  canOrder?: boolean;
  availableQuantity?: number;
}

