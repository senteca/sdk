
export interface ShippingGroupedReportsByShippingStatusDto {
  orderIds: string[];
  newStatus: ShippingGroupedReportsByShippingStatusDtoNewStatusEnum;
}

export enum ShippingGroupedReportsByShippingStatusDtoNewStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
