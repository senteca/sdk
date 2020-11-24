import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { AddressDTO } from './AddressDTO';

export interface ShippingDeliveryDraftDTO {
  status: ShippingDeliveryDraftDTOStatusEnum;
  items: ShippingDeliveryItemDTO[];
  address: AddressDTO;
  moduleData?: any;
}

export enum ShippingDeliveryDraftDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
