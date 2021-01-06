
export interface BrandStatusUpdateDTO {
  status: BrandStatusUpdateDTOStatusEnum;
}

export enum BrandStatusUpdateDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
