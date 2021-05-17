import { TaxedPriceDTO } from './TaxedPriceDTO';

export interface MerchantTaxedPriceDTO {
  merchantKey: string;
  price: TaxedPriceDTO;
}

