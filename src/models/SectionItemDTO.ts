
export interface SectionItemDTO {
  _id: any;
  data?: any;
  type: SectionItemDTOTypeEnum;
  tags?: string[];
  hideOnDesktop?: boolean;
  hideOnMobile?: boolean;
}

export enum SectionItemDTOTypeEnum {
    Category = 'category',  
    Brand = 'brand',  
    Custom = 'custom',  
}
