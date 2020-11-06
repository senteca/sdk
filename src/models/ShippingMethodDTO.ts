import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ZoneRateDTO } from './ZoneRateDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  taxCategory: IdReferenceDTO;
  storeKey: string;
  authority: ShippingMethodDTOAuthorityEnum;
  merchantKey?: string;
  type: ShippingMethodDTOTypeEnum;
  moduleKey?: string;
  methodKey?: string;
  predicate?: string;
  zoneRates: ZoneRateDTO[];
  stockLocations: string[];
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
export enum ShippingMethodDTOCodFeeRateCalculationTypeEnum {
    OrderTotalAmount = 'OrderTotalAmount',  
}
