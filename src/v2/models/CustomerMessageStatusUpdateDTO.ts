
export interface CustomerMessageStatusUpdateDTO {
  status: CustomerMessageStatusUpdateDTOStatusEnum;
}

export enum CustomerMessageStatusUpdateDTOStatusEnum {
    Read = 'read',  
    Unread = 'unread',  
}
