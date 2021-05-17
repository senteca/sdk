
export interface ShippingDeliveryParcelStatusUpdateDTO {
  status: ShippingDeliveryParcelStatusUpdateDTOStatusEnum;
}

export enum ShippingDeliveryParcelStatusUpdateDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    Cancelled = 'Cancelled',  
    BackOrder = 'BackOrder',  
}
