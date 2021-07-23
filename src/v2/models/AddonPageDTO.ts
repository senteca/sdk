
export interface AddonPageDTO {
  type: AddonPageDTOTypeEnum;
  schema: any;
}

export enum AddonPageDTOTypeEnum {
    Settings = 'settings',  
    Products = 'products',  
    Categories = 'categories',  
}
