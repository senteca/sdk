import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { ShippingParcelMeasurementDTO } from './ShippingParcelMeasurementDTO';

export interface ShippingDeliveryParcelDraftDTO {
  status?: ShippingDeliveryParcelDraftDTOStatusEnum;
  items?: ShippingDeliveryItemDTO[];
  measurements?: ShippingParcelMeasurementDTO;
  moduleData?: any;
}

export enum ShippingDeliveryParcelDraftDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    Cancelled = 'Cancelled',  
    BackOrder = 'BackOrder',  
}
