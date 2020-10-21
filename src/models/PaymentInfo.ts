import { PaymentProvider } from './PaymentProvider';

export interface PaymentInfo {
  type: string;
  label: string;
  providers: PaymentProvider[];
}

