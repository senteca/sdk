import { KeyReferenceDTO } from './KeyReferenceDTO';
import { AddressDTO } from './AddressDTO';
import { LineItemImportDTO } from './LineItemImportDTO';
import { MerchantPriceDTO } from './MerchantPriceDTO';
import { MoneyDTO } from './MoneyDTO';
import { MerchantTaxedPriceDTO } from './MerchantTaxedPriceDTO';
import { TaxedPriceDTO } from './TaxedPriceDTO';
import { DiscountCodeInfoDTO } from './DiscountCodeInfoDTO';
import { OrderWalletDTO } from './OrderWalletDTO';
import { MerchantMethodDTO } from './MerchantMethodDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ShippingDTO } from './ShippingDTO';

export interface OrderImportDTO {
  id?: string;
  createdAt: number;
  updatedAt: number;
  version: number;
  status: OrderImportDTOStatusEnum;
  state?: KeyReferenceDTO;
  countryCode: string;
  currencyCode: string;
  taxIncluded: boolean;
  languageCode?: string;
  priceList: KeyReferenceDTO;
  orderNumber: number;
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
  shippingAddress: AddressDTO;
  billingAddress: AddressDTO;
  lineItems: LineItemImportDTO[];
  merchants: KeyReferenceDTO[];
  merchantsTotalPrices: MerchantPriceDTO[];
  grandTotalPrice: MoneyDTO;
  merchantsTaxedPrices: MerchantTaxedPriceDTO[];
  grandTaxedPrice?: TaxedPriceDTO;
  discountCodes: DiscountCodeInfoDTO[];
  wallet?: OrderWalletDTO;
  payments: any[];
  paymentsAuthority?: OrderImportDTOPaymentsAuthorityEnum;
  merchantPaymentMethods?: MerchantMethodDTO[];
  platformPaymentMethod?: IdReferenceDTO;
  shippings: ShippingDTO[];
  shippingsAuthority?: OrderImportDTOShippingsAuthorityEnum;
  merchantShippingMethods?: MerchantMethodDTO[];
  platformShippingMethod?: IdReferenceDTO;
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
