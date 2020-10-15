import { LocalizedString } from './LocalizedString';
import { AddressDTO } from './AddressDTO';

export interface StockLocationDraftDTO {
  version?: number;
  key: string;
  merchantKey: string;
  priority?: number;
  name: LocalizedString;
  description?: LocalizedString;
  address: AddressDTO;
}

