
export interface BulkStatusChangeDTO {
  filter: string;
  storeKeys: string[];
  status: BulkStatusChangeDTOStatusEnum;
}

export enum BulkStatusChangeDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
