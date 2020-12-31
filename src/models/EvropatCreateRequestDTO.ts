import { EvropatCustomerInfo } from './EvropatCustomerInfo';
import { EvropatLineItem } from './EvropatLineItem';
import { EvropatCreateSettingsDTO } from './EvropatCreateSettingsDTO';

export interface EvropatCreateRequestDTO {
  id: number;
  orderNumber: string;
  cod: boolean;
  status: string;
  currency: string;
  shipmentDescription: string;
  shipmentNumber: string;
  customerInfo: EvropatCustomerInfo;
  items: EvropatLineItem[];
  settings: EvropatCreateSettingsDTO;
}

