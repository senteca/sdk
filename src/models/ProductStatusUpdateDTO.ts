
export interface ProductStatusUpdateDTO {
  status: ProductStatusUpdateDTOStatusEnum;
}

export enum ProductStatusUpdateDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
