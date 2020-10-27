import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ShippingFeeTableOrderTotalWeightInGramsDTO } from './ShippingFeeTableOrderTotalWeightInGramsDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDraftDTO {
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  countryCode: string;
  currencyCode: string;
  taxCategory: IdReferenceDTO;
  storeKey: string;
  authority: ShippingMethodDraftDTOAuthorityEnum;
  merchantKey: string;
  type: ShippingMethodDraftDTOTypeEnum;
  moduleKey: string;
  methodKey: string;
  shippingFeeRateCalculationType?: ShippingMethodDraftDTOShippingFeeRateCalculationTypeEnum;
  shippingFeeTableOrderTotalWeightInGrams?: ShippingFeeTableOrderTotalWeightInGramsDTO[];
  isCOD?: boolean;
  codFeeRateCalculationType?: ShippingMethodDraftDTOCodFeeRateCalculationTypeEnum;
  codFeeTableOrderTotalAmount?: CodFeeTableOrderTotalAmountDTO[];
}

export enum ShippingMethodDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum ShippingMethodDraftDTOTypeEnum {
    ShippingServiceProvider = 'ShippingServiceProvider',  
    PickUpFromStore = 'PickUpFromStore',  
    Custom = 'Custom',  
}
export enum ShippingMethodDraftDTOShippingFeeRateCalculationTypeEnum {
    OrderTotalWeightInGrams = 'OrderTotalWeightInGrams',  
}
export enum ShippingMethodDraftDTOCodFeeRateCalculationTypeEnum {
    OrderTotalAmount = 'OrderTotalAmount',  
}
