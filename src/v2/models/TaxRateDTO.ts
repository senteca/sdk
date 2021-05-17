import { SubRateDTO } from './SubRateDTO';

export interface TaxRateDTO {
  id?: string;
  totalAmount: number;
  countryCode: string;
  state?: string;
  subRates: SubRateDTO[];
}

