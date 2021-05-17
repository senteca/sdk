import { KeyReferenceDTO } from './KeyReferenceDTO';
import { IdReferenceDTO } from './IdReferenceDTO';

export interface MerchantMethodDTO {
  merchant: KeyReferenceDTO;
  method: IdReferenceDTO;
}

