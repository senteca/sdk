import { LangValue } from './LangValue';
import { AddressDraftDTO } from './AddressDraftDTO';

export interface StockLocationDraftDTO {
  version?: number;
  key: string;
  merchantKey: string;
  priority?: number;
  storeAvailability?: string[];
  name: LangValue[];
  description?: LangValue[];
  address: AddressDraftDTO;
}

