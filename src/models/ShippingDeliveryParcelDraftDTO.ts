import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { ShippingParcelMeasurementDTO } from './ShippingParcelMeasurementDTO';

export interface ShippingDeliveryParcelDraftDTO {
  status: ShippingDeliveryParcelDraftDTOStatusEnum;
  items: ShippingDeliveryItemDTO[];
  measurements: ShippingParcelMeasurementDTO;
  providerData?: object;
}

export enum ShippingDeliveryParcelDraftDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    Canceled = 'Canceled',  
    BackOrder = 'BackOrder',  
}
