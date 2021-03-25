import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { ShippingParcelMeasurementDTO } from './ShippingParcelMeasurementDTO';

export interface ShippingDeliveryParcelDTO {
  _id: string;
  createdAt?: number;
  updatedAt?: number;
  status: ShippingDeliveryParcelDTOStatusEnum;
  items: ShippingDeliveryItemDTO[];
  measurements: ShippingParcelMeasurementDTO;
  moduleData?: any;
}

export enum ShippingDeliveryParcelDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    Cancelled = 'Cancelled',  
    BackOrder = 'BackOrder',  
}
