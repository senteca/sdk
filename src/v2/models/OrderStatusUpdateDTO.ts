
export interface OrderStatusUpdateDTO {
  status: OrderStatusUpdateDTOStatusEnum;
}

export enum OrderStatusUpdateDTOStatusEnum {
    Draft = 'Draft',  
    Open = 'Open',  
    Confirmed = 'Confirmed',  
    Complete = 'Complete',  
    Cancelled = 'Cancelled',  
}
