
export interface ShippingConfigDraftDTO {
  version?: number;
  storeKey: string;
  authority: ShippingConfigDraftDTOAuthorityEnum;
  merchantKey: string;
  moduleKey: string;
  config?: object;
}

export enum ShippingConfigDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
