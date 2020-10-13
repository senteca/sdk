
export interface WalletTypeDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  currencyType: WalletTypeDTOCurrencyTypeEnum;
  currencyCode?: string;
  manageType: WalletTypeDTOManageTypeEnum;
  externalApiUrl?: string;
  externalApiUsername?: string;
  externalApiPassword?: string;
}

export enum WalletTypeDTOCurrencyTypeEnum {
    Virtual = 'virtual',  
    Fiat = 'fiat',  
    Crypto = 'crypto',  
}
export enum WalletTypeDTOManageTypeEnum {
    Internal = 'internal',  
    External = 'external',  
}
