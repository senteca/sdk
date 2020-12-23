
export interface StoreStatusDTO {
  storeKey: string;
  status: StoreStatusDTOStatusEnum;
}

export enum StoreStatusDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
