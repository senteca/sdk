import { LangValue } from './LangValue';
import { GeographicalCoordinatesDTO } from './GeographicalCoordinatesDTO';

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
  geographicalCoordinates?: GeographicalCoordinatesDTO;
}

