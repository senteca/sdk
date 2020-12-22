import { LangValue } from './LangValue';
import { AddressDraftDTO } from './AddressDraftDTO';

export interface StockLocationDTO {
  version?: number;
  key: string;
  merchantKey: string;
  priority?: number;
  storeAvailability?: string[];
  name: LangValue[];
  description?: LangValue[];
  address: AddressDraftDTO;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

