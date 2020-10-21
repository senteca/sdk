import { ProviderConfigField } from './ProviderConfigField';

export interface PaymentProvider {
  type: string;
  label: string;
  config: ProviderConfigField[];
}

