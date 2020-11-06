
export interface PaymentMethodDraftDTO {
  version?: number;
  authority: PaymentMethodDraftDTOAuthorityEnum;
  type: PaymentMethodDraftDTOTypeEnum;
  providerType?: PaymentMethodDraftDTOProviderTypeEnum;
  merchantKey?: string;
  key: string;
  description?: string;
  countryCode: string;
  currencyCode: string;
  providerConfig: object;
}

export enum PaymentMethodDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
export enum PaymentMethodDraftDTOTypeEnum {
    PaymentServiceProvider = 'PaymentServiceProvider',  
    CashOnDelivery = 'CashOnDelivery',  
}
export enum PaymentMethodDraftDTOProviderTypeEnum {
    Borica = 'Borica',  
}
