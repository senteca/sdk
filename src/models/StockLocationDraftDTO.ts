import { LangValue } from './LangValue';
import { AddressDTO } from './AddressDTO';

export interface StockLocationDraftDTO {
  version?: number;
  key: string;
  merchantKey: string;
  priority?: number;
  storeAvailability?: string[];
  name: LangValue[];
  description?: LangValue[];
  address: AddressDTO;
}

