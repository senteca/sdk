
export interface AddonPageDTO {
  type: AddonPageDTOTypeEnum;
  schema: any;
  uiSchema: any;
}

export enum AddonPageDTOTypeEnum {
    Settings = 'settings',  
    Products = 'products',  
    Categories = 'categories',  
}
