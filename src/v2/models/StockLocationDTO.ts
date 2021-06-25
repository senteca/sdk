import { AddressDTO } from './AddressDTO';
import { LangValue } from './LangValue';

export interface StockLocationDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  address: AddressDTO;
  version?: number;
  key: string;
  merchantKey: string;
  priority?: number;
  storeAvailability?: string[];
  isPhysical: boolean;
  isActive: boolean;
  name: LangValue[];
  description?: LangValue[];
}

