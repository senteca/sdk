import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ShippingFeeTableOrderTotalWeightInGramsDTO } from './ShippingFeeTableOrderTotalWeightInGramsDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  countryCode: string;
  currencyCode: string;
  taxCategory: IdReferenceDTO;
  storeKey: string;
  authority: ShippingMethodDTOAuthorityEnum;
  merchantKey: string;
  type: ShippingMethodDTOTypeEnum;
  moduleKey: string;
  methodKey: string;
  shippingFeeRateCalculationType?: ShippingMethodDTOShippingFeeRateCalculationTypeEnum;
  shippingFeeTableOrderTotalWeightInGrams?: ShippingFeeTableOrderTotalWeightInGramsDTO[];
  isCOD?: boolean;
  codFeeRateCalculationType?: ShippingMethodDTOCodFeeRateCalculationTypeEnum;
  codFeeTableOrderTotalAmount?: CodFeeTableOrderTotalAmountDTO[];
}

export enum ShippingMethodDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum ShippingMethodDTOTypeEnum {
    ShippingServiceProvider = 'ShippingServiceProvider',  
    PickUpFromStore = 'PickUpFromStore',  
    Custom = 'Custom',  
}
export enum ShippingMethodDTOShippingFeeRateCalculationTypeEnum {
    OrderTotalWeightInGrams = 'OrderTotalWeightInGrams',  
}
export enum ShippingMethodDTOCodFeeRateCalculationTypeEnum {
    OrderTotalAmount = 'OrderTotalAmount',  
}
