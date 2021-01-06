import { LangValue } from './LangValue';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { ZoneRateDTO } from './ZoneRateDTO';
import { CodFeeTableOrderTotalAmountDTO } from './CodFeeTableOrderTotalAmountDTO';

export interface ShippingMethodDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  taxCategory: KeyReferenceDTO;
  type: ShippingMethodDTOTypeEnum;
  configKey?: undefined;
  moduleKey?: string;
  methodKey?: string;
  predicate?: string;
  zoneRates: ZoneRateDTO[];
  isCOD?: boolean;
  codFeeRateCalculationType?: ShippingMethodDTOCodFeeRateCalculationTypeEnum;
  codFeeTableOrderTotalAmount?: CodFeeTableOrderTotalAmountDTO[];
}

export enum ShippingMethodDTOTypeEnum {
    ShippingServiceProvider = 'ShippingServiceProvider',  
    Custom = 'Custom',  
}
export enum ShippingMethodDTOCodFeeRateCalculationTypeEnum {
    OrderTotalAmount = 'OrderTotalAmount',  
}
