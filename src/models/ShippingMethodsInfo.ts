import { ShippingMethodDTO } from './ShippingMethodDTO';
import { MerchantShippingMethodsInfoDTO } from './MerchantShippingMethodsInfoDTO';

export interface ShippingMethodsInfo {
  platformShippingMethods: ShippingMethodDTO[];
  merchantsShippingMethods: MerchantShippingMethodsInfoDTO[];
}

