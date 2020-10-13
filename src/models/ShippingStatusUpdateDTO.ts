
export interface ShippingStatusUpdateDTO {
  status: ShippingStatusUpdateDTOStatusEnum;
}

export enum ShippingStatusUpdateDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
