import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { ZoneRateDTO } from './ZoneRateDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDraftDTO {
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  taxCategory: IdReferenceDTO;
  storeKey: string;
  authority: ShippingMethodDraftDTOAuthorityEnum;
  merchantKey?: string;
  type: ShippingMethodDraftDTOTypeEnum;
  moduleKey?: string;
  methodKey?: string;
  predicate?: string;
  zoneRates: ZoneRateDTO[];
  stockLocations: string[];
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
export enum ShippingMethodDraftDTOCodFeeRateCalculationTypeEnum {
    OrderTotalAmount = 'OrderTotalAmount',  
}
