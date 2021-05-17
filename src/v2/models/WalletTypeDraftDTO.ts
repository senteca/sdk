
export interface WalletTypeDraftDTO {
  version?: number;
  key: string;
  currencyType: WalletTypeDraftDTOCurrencyTypeEnum;
  currencyCode?: string;
  manageType: WalletTypeDraftDTOManageTypeEnum;
  externalApiUrl?: string;
  externalApiUsername?: string;
  externalApiPassword?: string;
}

export enum WalletTypeDraftDTOCurrencyTypeEnum {
    Virtual = 'virtual',  
    Fiat = 'fiat',  
    Crypto = 'crypto',  
}
export enum WalletTypeDraftDTOManageTypeEnum {
    Internal = 'internal',  
    External = 'external',  
}
