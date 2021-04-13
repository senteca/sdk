
export interface BulkStatusChangeDTO {
  filter: string;
  storeKey: string;
  status: BulkStatusChangeDTOStatusEnum;
}

export enum BulkStatusChangeDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
