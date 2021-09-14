
export interface SectionItemDTO {
  _id?: string;
  data?: any;
  name?: string;
  linkUrl?: string;
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
