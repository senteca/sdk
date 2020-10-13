import { AddressDTO } from './AddressDTO';
import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';

export interface ShippingDeliveryDraftDTO {
  status: ShippingDeliveryDraftDTOStatusEnum;
  address: AddressDTO;
  items: ShippingDeliveryItemDTO[];
}

export enum ShippingDeliveryDraftDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
