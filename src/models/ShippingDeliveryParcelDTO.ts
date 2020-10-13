import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { ShippingParcelMeasurementDTO } from './ShippingParcelMeasurementDTO';
import { ShippingParcelTrackingDataDTO } from './ShippingParcelTrackingDataDTO';

export interface ShippingDeliveryParcelDTO {
  createdAt: number;
  updatedAt: number;
  id: string;
  status: ShippingDeliveryParcelDTOStatusEnum;
  items: ShippingDeliveryItemDTO[];
  measurements: ShippingParcelMeasurementDTO;
  trackingData: ShippingParcelTrackingDataDTO;
  providerPayload?: object;
  providerMeta?: object;
}

export enum ShippingDeliveryParcelDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
