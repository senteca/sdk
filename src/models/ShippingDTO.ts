import { IdReferenceDTO } from './IdReferenceDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { MoneyDTO } from './MoneyDTO';
import { TaxedPriceDTO } from './TaxedPriceDTO';
import { TaxRateDTO } from './TaxRateDTO';
import { DiscountedLineItemPriceDTO } from './DiscountedLineItemPriceDTO';
import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { ShippingDeliveryDTO } from './ShippingDeliveryDTO';

export interface ShippingDTO {
  id?: string;
  createdAt?: number;
  updatedAt?: number;
  status: ShippingDTOStatusEnum;
  method: IdReferenceDTO;
  type: ShippingDTOTypeEnum;
  authority?: ShippingDTOAuthorityEnum;
  merchant?: KeyReferenceDTO;
  moduleKey?: string;
  moduleMethodKey?: string;
  price?: MoneyDTO;
  taxedPrice?: TaxedPriceDTO;
  taxCategory: IdReferenceDTO;
  taxRate: TaxRateDTO;
  discountedPrice?: DiscountedLineItemPriceDTO;
  isCOD?: boolean;
  codPrice?: MoneyDTO;
  codNetPrice?: MoneyDTO;
  codDiscount?: DiscountedLineItemPriceDTO;
  codTaxedPrice?: TaxedPriceDTO;
  paymentId?: string;
  items: ShippingDeliveryItemDTO[];
  deliveries?: ShippingDeliveryDTO[];
  moduleData?: object;
}

export enum ShippingDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
export enum ShippingDTOTypeEnum {
    ShippingServiceProvider = 'ShippingServiceProvider',  
    PickUpFromStore = 'PickUpFromStore',  
    Custom = 'Custom',  
}
export enum ShippingDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
