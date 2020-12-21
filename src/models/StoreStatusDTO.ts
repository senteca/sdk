
export interface StoreStatusDTO {
  storeKey: string;
  status: StoreStatusDTOStatusEnum;
}

export enum StoreStatusDTOStatusEnum {
    Published = 'published',  
    Address = 'address',  
    Delisted = 'delisted',  
}
