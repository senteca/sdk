import { LangValue } from './LangValue';
import { AddressDTO } from './AddressDTO';

export interface StockLocationDTO {
  version?: number;
  key: string;
  merchantKey: string;
  priority?: number;
  name: LangValue[];
  description?: LangValue[];
  address: AddressDTO;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

