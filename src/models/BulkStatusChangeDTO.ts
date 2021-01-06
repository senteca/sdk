
export interface BulkStatusChangeDTO {
  filters: string;
  status: BulkStatusChangeDTOStatusEnum;
}

export enum BulkStatusChangeDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
