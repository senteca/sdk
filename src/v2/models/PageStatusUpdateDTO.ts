
export interface PageStatusUpdateDTO {
  status: PageStatusUpdateDTOStatusEnum;
}

export enum PageStatusUpdateDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
}
