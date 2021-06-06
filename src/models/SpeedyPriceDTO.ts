import { SpeedyPriceDetailsDTO } from './SpeedyPriceDetailsDTO';

export interface SpeedyPriceDTO {
  amount: number;
  amountLocal: number;
  currency: string;
  currencyExchangeRate: number;
  currencyExchangeRateUnit: number;
  currencyLocal: string;
  details: SpeedyPriceDetailsDTO;
  detailsLocal: SpeedyPriceDetailsDTO;
  total: number;
  totalLocal: number;
  vat: number;
  vatLocal: number;
}

