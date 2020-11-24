
export interface ShippingConfigDraftDTO {
  version?: number;
  storeKey: string;
  authority: ShippingConfigDraftDTOAuthorityEnum;
  merchantKey: string;
  moduleKey: string;
  config?: any;
}

export enum ShippingConfigDraftDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
