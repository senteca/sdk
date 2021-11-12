
export interface CustomerMessageDraftDTO {
  version?: number;
  customerId: string;
  type?: string;
  message: any;
  status?: CustomerMessageDraftDTOStatusEnum;
}

export enum CustomerMessageDraftDTOStatusEnum {
    Read = 'read',  
    Unread = 'unread',  
}
