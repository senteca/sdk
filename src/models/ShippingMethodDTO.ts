import { LocalizedString } from './LocalizedString';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ShippingFeeTableOrderTotalWeightInGramsDTO } from './ShippingFeeTableOrderTotalWeightInGramsDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDTO {
  version?: number;
  name: LocalizedString;
  description?: LocalizedString;
  authority: ShippingMethodDTOAuthorityEnum;
  type: ShippingMethodDTOTypeEnum;
  providerType: ShippingMethodDTOProviderTypeEnum;
  option?: object;
  merchantKey?: string;
  taxCategory: IdReferenceDTO;
  countryCode: string;
  currencyCode: string;
  shippingFeeRateCalculationType: ShippingMethodDTOShippingFeeRateCalculationTypeEnum;
  shippingFeeTableOrderTotalWeightInGrams: ShippingFeeTableOrderTotalWeightInGramsDTO[];
  isCOD: boolean;
  codFeeRateCalculationType: ShippingMethodDTOCodFeeRateCalculationTypeEnum;
  codFeeTableOrderTotalAmount: CodFeeTableOrderTotalAmountDTO[];
  providerConfig: object;
  id: string;
  createdAt: number;
  updatedAt: number;
}

export enum ShippingMethodDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum ShippingMethodDTOTypeEnum {
    ShippingServiceProvider = 'ShippingServiceProvider',  
}
export enum ShippingMethodDTOProviderTypeEnum {
    Speedy = 'Speedy',  
    Econt = 'Econt',  
    Custom = 'Custom',  
}
export enum ShippingMethodDTOShippingFeeRateCalculationTypeEnum {
    OrderTotalWeightInGrams = 'OrderTotalWeightInGrams',  
}
export enum ShippingMethodDTOCodFeeRateCalculationTypeEnum {
    OrderTotalAmount = 'OrderTotalAmount',  
}
