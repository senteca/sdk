import { SubRateDTO } from './SubRateDTO';

export interface TaxRateDTO {
  _id: string;
  totalAmount: number;
  countryCode: string;
  state?: string;
  subRates: SubRateDTO[];
}

