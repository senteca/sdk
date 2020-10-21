import { ShippingProvider } from './ShippingProvider';

export interface ShippingInfo {
  type: string;
  label: string;
  providers: ShippingProvider[];
}

