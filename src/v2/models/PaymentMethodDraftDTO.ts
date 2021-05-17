import { LangValue } from './LangValue';

export interface PaymentMethodDraftDTO {
  version?: number;
  key: string;
  type: PaymentMethodDraftDTOTypeEnum;
  moduleKey?: string;
  authority: PaymentMethodDraftDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  countryCode: string;
  currencyCode: string;
  config: any;
}

export enum PaymentMethodDraftDTOTypeEnum {
    PaymentServiceProvider = 'PaymentServiceProvider',  
    CashOnDelivery = 'CashOnDelivery',  
    Custom = 'Custom',  
}
export enum PaymentMethodDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
