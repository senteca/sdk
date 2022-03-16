
export interface ShippingGroupedReportsByShippingStatusDTO {
  filter: string;
  newStatus: ShippingGroupedReportsByShippingStatusDTONewStatusEnum;
}

export enum ShippingGroupedReportsByShippingStatusDTONewStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
