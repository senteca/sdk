
export interface PaymentMethodDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  authority: PaymentMethodDTOAuthorityEnum;
  type: PaymentMethodDTOTypeEnum;
  providerType: PaymentMethodDTOProviderTypeEnum;
  merchantKey?: string;
  key: string;
  description?: string;
  countryCode: string;
  currencyCode: string;
  providerConfig: object;
}

export enum PaymentMethodDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum PaymentMethodDTOTypeEnum {
    PaymentServiceProvider = 'PaymentServiceProvider',  
    CashOnDelivery = 'CashOnDelivery',  
}
export enum PaymentMethodDTOProviderTypeEnum {
    Borica = 'Borica',  
}
