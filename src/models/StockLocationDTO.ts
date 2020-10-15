import { LocalizedString } from './LocalizedString';
import { AddressDTO } from './AddressDTO';

export interface StockLocationDTO {
  version?: number;
  key: string;
  merchantKey: string;
  priority?: number;
  name: LocalizedString;
  description?: LocalizedString;
  address: AddressDTO;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

