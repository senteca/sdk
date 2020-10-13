import { KeyReferenceDTO } from './KeyReferenceDTO';
import { ShippingMethodDTO } from './ShippingMethodDTO';

export interface MerchantShippingMethodsInfoDTO {
  merchant: KeyReferenceDTO;
  methods: ShippingMethodDTO[];
}

