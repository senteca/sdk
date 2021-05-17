import { KeyReferenceDTO } from './KeyReferenceDTO';
import { LangValue } from './LangValue';
import { ZoneRateDTO } from './ZoneRateDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDraftDTO {
  version?: number;
  type: ShippingMethodDraftDTOTypeEnum;
  configKey?: KeyReferenceDTO;
  moduleKey?: string;
  methodKey?: string;
  name: LangValue[];
  description?: LangValue[];
  taxCategory: KeyReferenceDTO;
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
