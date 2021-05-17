import { KeyReferenceDTO } from './KeyReferenceDTO';
import { PaymentMethodDTO } from './PaymentMethodDTO';

export interface MerchantPaymentMethodsInfoDTO {
  merchant: KeyReferenceDTO;
  methods: PaymentMethodDTO[];
}

