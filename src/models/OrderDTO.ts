import { CompactBasketDTO } from './CompactBasketDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';
import { LineItemDTO } from './LineItemDTO';
import { CustomLineItemDTO } from './CustomLineItemDTO';
import { MerchantPriceDTO } from './MerchantPriceDTO';
import { MoneyDTO } from './MoneyDTO';
import { MerchantTaxedPriceDTO } from './MerchantTaxedPriceDTO';
import { TaxedPriceDTO } from './TaxedPriceDTO';
import { MerchantWeightDTO } from './MerchantWeightDTO';
import { DiscountCodeInfoDTO } from './DiscountCodeInfoDTO';
import { SubtotalDiscountDTO } from './SubtotalDiscountDTO';
import { OrderWalletDTO } from './OrderWalletDTO';
import { MerchantMethodDTO } from './MerchantMethodDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ShippingDTO } from './ShippingDTO';
import { CustomField } from './CustomField';

export interface OrderDTO {
  canPurchase?: boolean;
  compact?: CompactBasketDTO;
  _id: string;
  createdAt: number;
  updatedAt: number;
  version: number;
  status: OrderDTOStatusEnum;
  state?: KeyReferenceDTO;
  note?: string;
  countryCode: string;
  currencyCode: string;
  taxIncluded: boolean;
  languageCode?: string;
  priceList: KeyReferenceDTO;
  orderNumber: number;
  orderRefNumber: string;
  store: KeyReferenceDTO;
  taxRoundingMode?: OrderDTOTaxRoundingModeEnum;
  taxCalculationMode?: OrderDTOTaxCalculationModeEnum;
  inventoryMode?: OrderDTOInventoryModeEnum;
  draftInventoryMode?: OrderDTODraftInventoryModeEnum;
  deleteDaysAfterDraftLastModification?: number;
  customerId?: string;
  customerFirstName?: string;
  customerLastName?: string;
  customerFullName?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerGroup?: KeyReferenceDTO;
  anonymousId?: string;
  shippingAddress: AddressDTO;
  billingAddress: AddressDTO;
  itemShippingAddresses?: AddressDTO[];
  lineItems: LineItemDTO[];
  lineItemsCount: number;
  customLineItems?: CustomLineItemDTO[];
  merchants?: KeyReferenceDTO[];
  merchantsTotalPrices: MerchantPriceDTO[];
  grandTotalPrice: MoneyDTO;
  merchantsTaxedPrices: MerchantTaxedPriceDTO[];
  grandTaxedPrice?: TaxedPriceDTO;
  merchantTotalWeights: MerchantWeightDTO[];
  totalWeightInGrams: number;
  discountCodes: DiscountCodeInfoDTO[];
  subtotal?: MoneyDTO;
  discountedSubtotal?: SubtotalDiscountDTO;
  wallet?: OrderWalletDTO;
  payments: any[];
  paymentsAuthority?: OrderDTOPaymentsAuthorityEnum;
  merchantPaymentMethods?: MerchantMethodDTO[];
  platformPaymentMethod?: IdReferenceDTO;
  shippings: ShippingDTO[];
  shippingsAuthority?: OrderDTOShippingsAuthorityEnum;
  merchantShippingMethods?: MerchantMethodDTO[];
  platformShippingMethod?: IdReferenceDTO;
  custom?: CustomField[];
}

export enum OrderDTOStatusEnum {
    Draft = 'Draft',  
    Open = 'Open',  
    Confirmed = 'Confirmed',  
    Complete = 'Complete',  
    Cancelled = 'Cancelled',  
}
export enum OrderDTOTaxRoundingModeEnum {
    HalfEven = 'HalfEven',  
    HalfUp = 'HalfUp',  
    HalfDown = 'HalfDown',  
}
export enum OrderDTOTaxCalculationModeEnum {
    LineItemLevel = 'LineItemLevel',  
    UnitPriceLevel = 'UnitPriceLevel',  
}
export enum OrderDTOInventoryModeEnum {
    TrackOnly = 'TrackOnly',  
    ReserveOnOrder = 'ReserveOnOrder',  
    None = 'None',  
}
export enum OrderDTODraftInventoryModeEnum {
    TrackOnly = 'TrackOnly',  
    ReserveOnOrder = 'ReserveOnOrder',  
    None = 'None',  
}
export enum OrderDTOPaymentsAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum OrderDTOShippingsAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
