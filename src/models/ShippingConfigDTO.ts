
export interface ShippingConfigDTO {
  version?: number;
  storeKey: string;
  authority: ShippingConfigDTOAuthorityEnum;
  merchantKey: string;
  moduleKey: string;
  config?: object;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum ShippingConfigDTOAuthorityEnum {
    Platform = 'Platform',  
    Merchant = 'Merchant',  
}
