import { LangValue } from './LangValue';

export interface PaymentMethodDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  type: PaymentMethodDTOTypeEnum;
  moduleKey?: string;
  authority: PaymentMethodDTOAuthorityEnum;
  merchantKey?: string;
  name: LangValue[];
  description?: LangValue[];
  countryCode: string;
  currencyCode: string;
  config: any;
  isActive?: boolean;
}

export enum PaymentMethodDTOTypeEnum {
    PaymentServiceProvider = 'PaymentServiceProvider',  
    CashOnDelivery = 'CashOnDelivery',  
    Custom = 'Custom',  
}
export enum PaymentMethodDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
