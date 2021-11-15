
export interface CustomerMessageDTO {
  version?: number;
  customerId: string;
  type?: string;
  message: any;
  status?: CustomerMessageDTOStatusEnum;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum CustomerMessageDTOStatusEnum {
    Read = 'read',  
    Unread = 'unread',  
}
