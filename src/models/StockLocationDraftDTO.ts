import { LangValue } from './LangValue';
import { AddressDraftDTO } from './AddressDraftDTO';

export interface StockLocationDraftDTO {
  _id?: string;
  version?: number;
  key: string;
  merchantKey: string;
  priority?: number;
  storeAvailability?: string[];
  isPhysical: boolean;
  isActive: boolean;
  name: LangValue[];
  description?: LangValue[];
  address?: AddressDraftDTO;
}

