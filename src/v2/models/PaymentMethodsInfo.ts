import { PaymentMethodDTO } from './PaymentMethodDTO';
import { MerchantPaymentMethodsInfoDTO } from './MerchantPaymentMethodsInfoDTO';

export interface PaymentMethodsInfo {
  platformPaymentMethods: PaymentMethodDTO[];
  merchantsPaymentMethods: MerchantPaymentMethodsInfoDTO[];
}

