import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDraftDTO } from './AddressDraftDTO';
import { LineItemImportDTO } from './LineItemImportDTO';
import { CustomLineItemDTO } from './CustomLineItemDTO';
import { MerchantPriceDTO } from './MerchantPriceDTO';
import { MoneyDTO } from './MoneyDTO';
import { MerchantTaxedPriceDTO } from './MerchantTaxedPriceDTO';
import { TaxedPriceDTO } from './TaxedPriceDTO';
import { DiscountCodeInfoDTO } from './DiscountCodeInfoDTO';
import { OrderWalletDTO } from './OrderWalletDTO';
import { MerchantMethodDTO } from './MerchantMethodDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ShippingDTO } from './ShippingDTO';
import { CustomField } from './CustomField';

export interface OrderImportDTO {
  _id?: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  status: OrderImportDTOStatusEnum;
  state?: KeyReferenceDTO;
  countryCode: string;
  currencyCode: string;
  taxIncluded: boolean;
  languageCode?: string;
  priceList: KeyReferenceDTO;
  orderNumber: number;
  orderRefNumber: string;
  store: KeyReferenceDTO;
  taxRoundingMode?: OrderImportDTOTaxRoundingModeEnum;
  taxCalculationMode?: OrderImportDTOTaxCalculationModeEnum;
  inventoryMode?: OrderImportDTOInventoryModeEnum;
  draftInventoryMode?: OrderImportDTODraftInventoryModeEnum;
  deleteDaysAfterDraftLastModification?: number;
  customerId?: string;
  customerFirstName?: string;
  customerLastName?: string;
  customerFullName?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerGroup?: KeyReferenceDTO;
  anonymousId?: string;
  shippingAddress: AddressDraftDTO;
  billingAddress: AddressDraftDTO;
  lineItems: LineItemImportDTO[];
  customLineItems?: CustomLineItemDTO[];
  merchants: KeyReferenceDTO[];
  merchantsTotalPrices?: MerchantPriceDTO[];
  grandTotalPrice: MoneyDTO;
  merchantsTaxedPrices?: MerchantTaxedPriceDTO[];
  grandTaxedPrice?: TaxedPriceDTO;
  discountCodes?: DiscountCodeInfoDTO[];
  wallet?: OrderWalletDTO;
  payments?: any[];
  paymentsAuthority?: OrderImportDTOPaymentsAuthorityEnum;
  merchantPaymentMethods?: MerchantMethodDTO[];
  platformPaymentMethod?: IdReferenceDTO;
  shippings: ShippingDTO[];
  shippingsAuthority?: OrderImportDTOShippingsAuthorityEnum;
  merchantShippingMethods?: MerchantMethodDTO[];
  platformShippingMethod?: IdReferenceDTO;
  canPurchase?: boolean;
  totalWeightInGrams?: number;
  custom?: CustomField[];
}

export enum OrderImportDTOStatusEnum {
    Draft = 'Draft',  
    Open = 'Open',  
    Confirmed = 'Confirmed',  
    Complete = 'Complete',  
    Cancelled = 'Cancelled',  
}
export enum OrderImportDTOTaxRoundingModeEnum {
    HalfEven = 'HalfEven',  
    HalfUp = 'HalfUp',  
    HalfDown = 'HalfDown',  
}
export enum OrderImportDTOTaxCalculationModeEnum {
    LineItemLevel = 'LineItemLevel',  
    UnitPriceLevel = 'UnitPriceLevel',  
}
export enum OrderImportDTOInventoryModeEnum {
    TrackOnly = 'TrackOnly',  
    ReserveOnOrder = 'ReserveOnOrder',  
    None = 'None',  
}
export enum OrderImportDTODraftInventoryModeEnum {
    TrackOnly = 'TrackOnly',  
    ReserveOnOrder = 'ReserveOnOrder',  
    None = 'None',  
}
export enum OrderImportDTOPaymentsAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum OrderImportDTOShippingsAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
