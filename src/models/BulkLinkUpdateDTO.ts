import { IdReferenceDTO } from './IdReferenceDTO';

export interface BulkLinkUpdateDTO {
  filter: string;
  linkType: BulkLinkUpdateDTOLinkTypeEnum;
  links: IdReferenceDTO[];
}

export enum BulkLinkUpdateDTOLinkTypeEnum {
    Brand = 'brand',  
    Category = 'category',  
    Collection = 'collection',  
    Related = 'related',  
    Upsell = 'upsell',  
    Crosssell = 'crosssell',  
}
