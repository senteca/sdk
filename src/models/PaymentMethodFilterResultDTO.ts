import { PaymentMethodDTO } from './PaymentMethodDTO';

export interface PaymentMethodFilterResultDTO {
  results: PaymentMethodDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

