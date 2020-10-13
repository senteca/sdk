import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { ShippingParcelMeasurementDTO } from './ShippingParcelMeasurementDTO';
import { ShippingParcelTrackingDataDTO } from './ShippingParcelTrackingDataDTO';

export interface ShippingDeliveryParcelDraftDTO {
  status: ShippingDeliveryParcelDraftDTOStatusEnum;
  items: ShippingDeliveryItemDTO[];
  measurements: ShippingParcelMeasurementDTO;
  trackingData: ShippingParcelTrackingDataDTO;
  providerPayload?: object;
  providerMeta?: object;
}

export enum ShippingDeliveryParcelDraftDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
