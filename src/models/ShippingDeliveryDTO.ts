import { ShippingDeliveryParcelDTO } from './ShippingDeliveryParcelDTO';
import { AddressDTO } from './AddressDTO';
import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';

export interface ShippingDeliveryDTO {
  createdAt: number;
  updatedAt: number;
  id: string;
  parcels?: ShippingDeliveryParcelDTO[];
  status: ShippingDeliveryDTOStatusEnum;
  address: AddressDTO;
  items: ShippingDeliveryItemDTO[];
}

export enum ShippingDeliveryDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
