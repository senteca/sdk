import { SubRateDTO } from './SubRateDTO';

export interface TaxRateDraftDTO {
  countryCode: string;
  state?: string;
  subRates: SubRateDTO[];
  totalAmount?: number;
}

