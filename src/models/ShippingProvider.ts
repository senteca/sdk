import { ProviderOption } from './ProviderOption';

export interface ShippingProvider {
  type: string;
  label: string;
  config: string[];
  options: ProviderOption[];
}

