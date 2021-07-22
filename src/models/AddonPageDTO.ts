
export interface AddonPageDTO {
  type: AddonPageDTOTypeEnum;
  schema: any;
  data: any;
}

export enum AddonPageDTOTypeEnum {
    Settings = 'settings',
    Products = 'products',
    Categories = 'categories'
}
