import { ShippingDeliveryParcelDTO } from './ShippingDeliveryParcelDTO';
import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { AddressDTO } from './AddressDTO';

export interface ShippingDeliveryDTO {
  createdAt: number;
  updatedAt: number;
  id: string;
  parcels?: ShippingDeliveryParcelDTO[];
  status: ShippingDeliveryDTOStatusEnum;
  items: ShippingDeliveryItemDTO[];
  address: AddressDTO;
  providerData?: object;
}

export enum ShippingDeliveryDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
