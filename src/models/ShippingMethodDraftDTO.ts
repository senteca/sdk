import { LangValue } from './LangValue';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { ZoneRateDTO } from './ZoneRateDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDraftDTO {
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  taxCategory: KeyReferenceDTO;
  type: ShippingMethodDraftDTOTypeEnum;
  configKey?: undefined;
  moduleKey?: string;
  methodKey?: string;
  predicate?: string;
  zoneRates: ZoneRateDTO[];
  isCOD?: boolean;
  codFeeRateCalculationType?: ShippingMethodDraftDTOCodFeeRateCalculationTypeEnum;
  codFeeTableOrderTotalAmount?: CodFeeTableOrderTotalAmountDTO[];
}

export enum ShippingMethodDraftDTOTypeEnum {
    ShippingServiceProvider = 'ShippingServiceProvider',  
    Custom = 'Custom',  
}
export enum ShippingMethodDraftDTOCodFeeRateCalculationTypeEnum {
    OrderTotalAmount = 'OrderTotalAmount',  
}
