import { LocalizedString } from './LocalizedString';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ShippingFeeTableOrderTotalWeightInGramsDTO } from './ShippingFeeTableOrderTotalWeightInGramsDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDraftDTO {
  version?: number;
  name: LocalizedString;
  description?: LocalizedString;
  authority: ShippingMethodDraftDTOAuthorityEnum;
  type: ShippingMethodDraftDTOTypeEnum;
  providerType: ShippingMethodDraftDTOProviderTypeEnum;
  option?: object;
  merchantKey?: string;
  taxCategory: IdReferenceDTO;
  countryCode: string;
  currencyCode: string;
  shippingFeeRateCalculationType: ShippingMethodDraftDTOShippingFeeRateCalculationTypeEnum;
  shippingFeeTableOrderTotalWeightInGrams: ShippingFeeTableOrderTotalWeightInGramsDTO[];
  isCOD: boolean;
  codFeeRateCalculationType: ShippingMethodDraftDTOCodFeeRateCalculationTypeEnum;
  codFeeTableOrderTotalAmount: CodFeeTableOrderTotalAmountDTO[];
  providerConfig: object;
}

export enum ShippingMethodDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum ShippingMethodDraftDTOTypeEnum {
    ShippingServiceProvider = 'ShippingServiceProvider',  
}
export enum ShippingMethodDraftDTOProviderTypeEnum {
    Speedy = 'Speedy',  
    Econt = 'Econt',  
    Custom = 'Custom',  
}
export enum ShippingMethodDraftDTOShippingFeeRateCalculationTypeEnum {
    OrderTotalWeightInGrams = 'OrderTotalWeightInGrams',  
}
export enum ShippingMethodDraftDTOCodFeeRateCalculationTypeEnum {
    OrderTotalAmount = 'OrderTotalAmount',  
}
