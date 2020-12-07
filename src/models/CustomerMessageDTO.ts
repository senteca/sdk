
export interface CustomerMessageDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  customerId: string;
  type?: string;
  message: any;
  status?: CustomerMessageDTOStatusEnum;
}

export enum CustomerMessageDTOStatusEnum {
    Read = 'read',  
    Unread = 'unread',  
}
