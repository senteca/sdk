import { ShippingDeliveryParcelDTO } from './ShippingDeliveryParcelDTO';
import { ShippingDeliveryItemDTO } from './ShippingDeliveryItemDTO';
import { AddressDTO } from './AddressDTO';

export interface ShippingDeliveryDTO {
  _id: string;
  createdAt?: number;
  updatedAt?: number;
  parcels?: ShippingDeliveryParcelDTO[];
  status?: ShippingDeliveryDTOStatusEnum;
  items?: ShippingDeliveryItemDTO[];
  address?: AddressDTO;
  moduleData?: any;
}

export enum ShippingDeliveryDTOStatusEnum {
    Initial = 'Initial',  
    Pending = 'Pending',  
    Delayed = 'Delayed',  
    Partial = 'Partial',  
    Shipped = 'Shipped',  
    BackOrder = 'BackOrder',  
}
