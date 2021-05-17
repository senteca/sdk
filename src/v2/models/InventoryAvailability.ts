import { LangValue } from './LangValue';

export interface InventoryAvailability {
  stockLocationName: LangValue[];
  stockLocationKey: string;
  merchantKey: string;
  availableQuantity: number;
  acceptsBackorders: boolean;
  restockableInDays: number;
  isPhysical: boolean;
  isActive: boolean;
  stores: string[];
}

