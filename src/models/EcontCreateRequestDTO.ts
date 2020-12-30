import { EcontCustomerInfo } from './EcontCustomerInfo';
import { EcontLineItem } from './EcontLineItem';
import { EcontCreateSettingsDTO } from './EcontCreateSettingsDTO';

export interface EcontCreateRequestDTO {
  id: number;
  orderNumber: string;
  cod: boolean;
  status: string;
  currency: string;
  shipmentDescription: string;
  shipmentNumber: string;
  customerInfo: EcontCustomerInfo;
  items: EcontLineItem[];
  settings: EcontCreateSettingsDTO;
}

